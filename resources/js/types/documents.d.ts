import { User } from '.'

export type TDocument = {
  id: string
  title: string
  initialContent?: string
  user_id: string
  room_id?: string
  organization_id?: string
  created_at: string
  updated_at: string
  user: User
}
