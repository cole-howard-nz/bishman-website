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
  role: string
  company: string
  blurb: string
  // image?: string
}

export type Team = {
  id: number
  name: string
  role: string
  email: string
  blurb: string
  image: string
}

export type Company = {
  id: number
  name: string
  link: string
  image: string
}