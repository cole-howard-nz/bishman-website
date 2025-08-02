export type Project = {
  id: number
  name: string
  startDate: string
  finishDate?: string
  isComplete: boolean
  location: string
  blurb: string
  images: string[]
}

export type Service = {
  id: number
  name: string
  blurb: string
  // images?: string[]
}

export type Client = {
  id: number
  stars: number
  name: string
  company: string
  blurb: string
  // image?: string
}

export enum Role {
  Management = 'Management',
  Office = 'Office',
  Electrician = 'Electrician'
}

export const RoleDescriptions: Record<Role, string> = {
  [Role.Management]: 'Leading the team with vision and strategy.',
  [Role.Office]: 'Supporting operations and communications.',
  [Role.Electrician]: 'Powering projects with expert hands-on work.',
}

export type Team = {
  id: number
  name: string
  role: Role
  blurb: string
  // image?: string
}