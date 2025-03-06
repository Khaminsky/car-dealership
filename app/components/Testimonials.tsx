"use client"

import { useState, useCallback, useEffect } from "react"
import useEmblaCarousel from "embla-carousel-react"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

// Mock testimonial data
const testimonials = [
  {
    id: 1,
    name: "John Doe",
    role: "Happy Customer",
    content:
      "I found my dream car on this website. The filtering options made it so easy to find exactly what I was looking for!",
    avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=100&h=100&fit=crop",
  },
  {
    id: 2,
    name: "Jane Smith",
    role: "Car Enthusiast",
    content: "The detailed information provided for each car is impressive. It helped me make an informed decision.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
  },
  {
    id: 3,
    name: "Mike Johnson",
    role: "First-time Buyer",
    content:
      "As a first-time car buyer, I appreciated how user-friendly this website is. It made the process much less daunting.",
    avatar: "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?w=100&h=100&fit=crop",
  },
  {
    id: 4,
    name: "Emily Brown",
    role: "Returning Customer",
    content: "I've used this platform twice now to find great deals on used cars. Highly recommended!",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop",
  },
]

export default function TestimonialsSlider() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false)
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false)

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi])

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setPrevBtnEnabled(emblaApi.canScrollPrev())
    setNextBtnEnabled(emblaApi.canScrollNext())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    onSelect()
    emblaApi.on("select", onSelect)
  }, [emblaApi, onSelect])

  return (
    <div className="relative px-4 py-16 bg-secondary">
      <h2 className="text-3xl font-bold text-center mb-8 text-rose-600">What Our Customers Say</h2>
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="flex-[0_0_100%] min-w-0 px-4 sm:flex-[0_0_50%] lg:flex-[0_0_33.33%]">
              <div className="bg-card rounded-lg shadow-md p-6 h-full flex flex-col border border-rose-200">
                <Quote className="w-10 h-10 text-rose-600 mb-4" />
                <p className="text-card-foreground mb-4 flex-grow">{testimonial.content}</p>
                <div className="flex items-center">
                  <Image
                    src={testimonial.avatar || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full border-2 border-rose-600 mr-4"
                  />
                  <div>
                    <h3 className="font-semibold">{testimonial.name}</h3>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Button
        variant="outline"
        size="icon"
        className="absolute left-4 top-1/2 transform -translate-y-1/2 border-rose-600 text-rose-600 hover:bg-rose-600 hover:text-white"
        onClick={scrollPrev}
        disabled={!prevBtnEnabled}
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>
      <Button
        variant="outline"
        size="icon"
        className="absolute right-4 top-1/2 transform -translate-y-1/2 border-rose-600 text-rose-600 hover:bg-rose-600 hover:text-white"
        onClick={scrollNext}
        disabled={!nextBtnEnabled}
      >
        <ChevronRight className="h-4 w-4" />
      </Button>
    </div>
  )
}
