import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  // такой способ доступа к переменным среды окружения является уникальным для `vite`
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_KEY
)

export default supabase