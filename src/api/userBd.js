import supabase from '../supabase'
import sureal from '../utils/sureal'

// метод для получения данных пользователя из базы при наличии аутентифицированного пользователя
// объект, возвращаемый методом `auth.user`, извлекается из локального хранилища
export const get = async () => {
    const user = supabase.auth.user()
    if (user) {
        try {
            const { data, error } = await supabase
                .from('users')
                .select()
                .match({ id: user.id })
                .single()
            if (error) throw error
            console.log(data)
            return data
        } catch (e) {
            throw e
        }
    }
    return null
}

// метод для регистрации пользователя
export const register = async (email, password) => {
    try {
        // регистрируем пользователя
        const { user, error } = await supabase.auth.signUp(
            // основные/обязательные данные
            {
                email,
                password
            }
        )
        if (error) throw error
        // записываем пользователя в базу
        const { data: _user, error: _error } = await supabase
            .from('users')
            // сериализуем объект пользователя
            .insert([sureal(user)])
            .single()
        if (_error) throw _error
        return _user
    } catch (e) {
        throw e
    }
}

// метод для авторизации пользователя
export const login = async (data) => {
    try {
        // авторизуем пользователя
        const { user, error } = await supabase.auth.signIn(data)
        if (error) throw error
        // получаем данные пользователя из базы
        const { data: _user, error: _error } = await supabase
            .from('users')
            .select()
            .match({ id: user.id })
            .single()
        if (_error) throw _error
        return _user
    } catch (e) {
        throw e
    }
}

// метод для выхода из системы
export const logout = async () => {
    try {
        const { error } = await supabase.auth.signOut()
        if (error) throw error
        return null
    } catch (e) {
        throw e
    }
}

// метод для обновления данных пользователя
export const update = async (data) => {
    // получаем объект с данными пользователя
    const user = supabase.auth.user()
    if (!user) return
    try {
        const { data: _user, error } = await supabase
            .from('users')
            .update(data)
            .match({ id: user.id })
            .single()
        if (error) throw error
        return _user
    } catch (e) {
        throw e
    }
}

