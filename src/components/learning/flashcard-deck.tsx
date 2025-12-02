"use client"

import * as React from "react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Flashcard } from "./flashcard"

interface Word {
  id: string
  front: string
  back: string
}

interface FlashcardDeckProps {
  words: Word[]
}

export function FlashcardDeck({ words }: FlashcardDeckProps) {
  return (
    <div className="w-full max-w-xl mx-auto">
      <Carousel className="w-full">
        <CarouselContent>
          {words.map((word) => (
            <CarouselItem key={word.id}>
              <div className="p-1">
                <Flashcard front={word.front} back={word.back} />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="flex justify-center mt-4 gap-2">
            <CarouselPrevious className="static translate-y-0" />
            <CarouselNext className="static translate-y-0" />
        </div>
      </Carousel>
    </div>
  )
}
