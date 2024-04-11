import supabase from 's'

// метод для получения данных из всех таблиц
async function fetchAllData() {
  try {
    // пользователи
    const { data: users } = await supabase
      .from('users')
      .select('id, email, user_name')
    // посты
    const { data: tests } = await supabase
      .from('tests')
      .select()
    // комментарии
    const { data: questions } = await supabase
      .from('questions')
      .select()
    return { users, tests, questions }
  } catch (e) {
    console.error(e)
  }
}

const dbApi = { fetchAllData }

export default dbApi