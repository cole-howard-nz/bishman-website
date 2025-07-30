import * as React from "react"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import { Client } from "@/lib/types"
import Image from "next/image"

interface ClientCarouselProps {
  clients: Client[]
}

const ClientCarousel = ({ clients }: ClientCarouselProps) => {
  return (
    <Carousel
      opts={{ align: "start" }}
      className="w-full">
      <CarouselContent>
        { clients.map(client => 
          <CarouselItem key={ client.id } className="md:basis-1/2 lg:basis-1/3">
            <Card className="h-60 bg-gradient-to-br from-[#b2c6f8] via-[#758bc7] to-[#8ca6e9]  border-[#758bc7] border-1">
              <CardContent className="flex flex-col items-center justify-center text-white space-y-4">
                <section className='flex items-center justify-between w-full'>
                  <div className='flex items-center gap-2'>
                    <span
                      style={{ clipPath: 'circle(50%)' }}
                      className="w-12 h-12 bg-white inline-block"
                    />

                    <div className='leading-5'>
                      <p className=''>{ client.name }</p>
                      <p className='font-light'>{ client.company }</p>
                    </div>
                  </div>

                  <div className="flex">
                    { Array.from({ length: client.stars }, (_, index) => 
                      <span key={ index }><Image alt="Star" src={ '/star.svg' } width={ 16 } height={ 16 } /></span>
                    )}
                  </div>
                </section>
                
                <p>{ client.blurb }</p>
              </CardContent>
            </Card>
          </CarouselItem>
        )}
      </CarouselContent>
    </Carousel>
  )
}

export default ClientCarousel