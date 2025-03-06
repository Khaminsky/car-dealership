"use client"

import { useState, useEffect, useCallback} from "react"
import Image from "next/image"
import { Filter } from "lucide-react"

import { Filters } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Slider } from "@/components/ui/slider"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Badge } from "@/components/ui/badge"

// Mock car data
const carsData = [
  {
    id: 1,
    title: "Toyota Camry",
    year: 2019,
    price: 18500,
    mileage: 45000,
    engineCapacity: 2.5,
    transmission: "Automatic",
    fuelType: "Petrol",
    brand: "Toyota",
    image: "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=500&h=350&fit=crop",
  },
  {
    id: 2,
    title: "Honda Civic",
    year: 2020,
    price: 19200,
    mileage: 32000,
    engineCapacity: 1.8,
    transmission: "Automatic",
    fuelType: "Petrol",
    brand: "Honda",
    image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=500&h=350&fit=crop",
  },
  {
    id: 3,
    title: "BMW 3 Series",
    year: 2018,
    price: 25000,
    mileage: 50000,
    engineCapacity: 2.0,
    transmission: "Automatic",
    fuelType: "Diesel",
    brand: "BMW",
    image: "https://images.unsplash.com/photo-1556189250-72ba954cfc2b?w=500&h=350&fit=crop",
  },
  {
    id: 4,
    title: "Tesla Model 3",
    year: 2021,
    price: 42000,
    mileage: 15000,
    engineCapacity: 0,
    transmission: "Automatic",
    fuelType: "Electric",
    brand: "Tesla",
    image: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=500&h=350&fit=crop",
  },
  {
    id: 5,
    title: "Ford Mustang",
    year: 2017,
    price: 29000,
    mileage: 60000,
    engineCapacity: 5.0,
    transmission: "Manual",
    fuelType: "Petrol",
    brand: "Ford",
    image: "https://images.unsplash.com/photo-1584345604476-8ec5e12e42dd?w=500&h=350&fit=crop",
  },
  {
    id: 6,
    title: "Toyota Prius",
    year: 2020,
    price: 24000,
    mileage: 28000,
    engineCapacity: 1.8,
    transmission: "Automatic",
    fuelType: "Hybrid",
    brand: "Toyota",
    image: "https://images.unsplash.com/photo-1619767886558-efdc259cde1a?w=500&h=350&fit=crop",
  },
  {
    id: 7,
    title: "Mercedes-Benz E-Class",
    year: 2019,
    price: 38000,
    mileage: 40000,
    engineCapacity: 3.0,
    transmission: "Automatic",
    fuelType: "Diesel",
    brand: "Mercedes-Benz",
    image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=500&h=350&fit=crop",
  },
  {
    id: 8,
    title: "Audi A4",
    year: 2018,
    price: 27000,
    mileage: 55000,
    engineCapacity: 2.0,
    transmission: "Automatic",
    fuelType: "Petrol",
    brand: "Audi",
    image: "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?w=500&h=350&fit=crop",
  },
  {
    id: 9,
    title: "Nissan Leaf",
    year: 2020,
    price: 22000,
    mileage: 20000,
    engineCapacity: 0,
    transmission: "Automatic",
    fuelType: "Electric",
    brand: "Nissan",
    image: "https://images.unsplash.com/photo-1593055357429-62eaf3b259cc?w=500&h=350&fit=crop",
  },
  {
    id: 10,
    title: "Volkswagen Golf",
    year: 2019,
    price: 19500,
    mileage: 38000,
    engineCapacity: 1.4,
    transmission: "Manual",
    fuelType: "Petrol",
    brand: "Volkswagen",
    image: "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?w=500&h=350&fit=crop",
  },
  {
    id: 11,
    title: "Hyundai Tucson",
    year: 2020,
    price: 23000,
    mileage: 30000,
    engineCapacity: 2.0,
    transmission: "Automatic",
    fuelType: "Diesel",
    brand: "Hyundai",
    image: "https://images.unsplash.com/photo-1633859036994-ebe9a994e4a2?w=500&h=350&fit=crop",
  },
  {
    id: 12,
    title: "Kia Niro Hybrid",
    year: 2021,
    price: 26000,
    mileage: 18000,
    engineCapacity: 1.6,
    transmission: "Automatic",
    fuelType: "Hybrid",
    brand: "Kia",
    image: "https://images.unsplash.com/photo-1617469767053-d3b523a0b982?w=500&h=350&fit=crop",
  },
]

// Get unique values for filters
const brands = [...new Set(carsData.map((car) => car.brand))]
const years = [...new Set(carsData.map((car) => car.year))].sort((a, b) => b - a)
const transmissions = [...new Set(carsData.map((car) => car.transmission))]
const fuelTypes = [...new Set(carsData.map((car) => car.fuelType))]

export default function CarDisplay() {
  const [filters, setFilters] = useState<{
    brands: string[],
    years: number[],
    engineCapacity: [number, number],
    mileage: [number, number],
    transmissions: string[],
    fuelTypes: string[],
  }>({
    brands: [],
    years: [],
    engineCapacity: [0, 5],
    mileage: [0, 100000],
    transmissions: [],
    fuelTypes: [],
  })

  const [filteredCars, setFilteredCars] = useState(carsData)
  const [isFilterOpen, setIsFilterOpen] = useState(false)

// Apply filters
useEffect(() => {
  let result = carsData;

  // Filter by brand
  if (filters.brands.length > 0) {
    result = result.filter((car) => filters.brands.includes(car.brand));
  }

  // Filter by year
  if (filters.years.length > 0) {
    result = result.filter((car) => filters.years.includes(car.year));
  }

  // Filter by engine capacity
  result = result.filter(
    (car) => car.engineCapacity >= filters.engineCapacity[0] && car.engineCapacity <= filters.engineCapacity[1]
  );

  // Filter by mileage
  result = result.filter((car) => car.mileage >= filters.mileage[0] && car.mileage <= filters.mileage[1]);

  // Filter by transmission
  if (filters.transmissions.length > 0) {
    result = result.filter((car) => filters.transmissions.includes(car.transmission));
  }

  // Filter by fuel type
  if (filters.fuelTypes.length > 0) {
    result = result.filter((car) => filters.fuelTypes.includes(car.fuelType));
  }

  setFilteredCars(result);
}, [filters]);


const toggleBrand = useCallback((brand: string) => {
    setFilters((prev: Filters) => ({
        ...prev,
        brands: prev.brands.includes(brand) ? prev.brands.filter((b) => b !== brand) : [...prev.brands, brand],
    }));
}, []);

// Toggle year filter
const toggleYear = useCallback((year: number) => {
  setFilters((prev) => ({
    ...prev,
    years: prev.years.includes(year) ? prev.years.filter((y) => y !== year) : [...prev.years, year],
  }));
}, []);

// Toggle transmission filter
const toggleTransmission = useCallback((transmission: string) => {
  setFilters((prev) => ({
    ...prev,
    transmissions: prev.transmissions.includes(transmission)
      ? prev.transmissions.filter((t) => t !== transmission)
      : [...prev.transmissions, transmission],
  }));
}, []);

// Toggle fuel type filter
const toggleFuelType = useCallback((fuelType: string) => {
  setFilters((prev) => ({
    ...prev,
    fuelTypes: prev.fuelTypes.includes(fuelType)
      ? prev.fuelTypes.filter((f) => f !== fuelType)
      : [...prev.fuelTypes, fuelType],
  }));
}, []);

// Update engine capacity filter
const updateEngineCapacity = useCallback((value?: number) => { 
  setFilters((prev) => ({
    ...prev,
    engineCapacity: value,
  }));
}, []);

const updateMileage = useCallback((value?: number) => { 
  setFilters((prev) => ({
    ...prev,
    mileage: value,
  }));
}, []);

  // Reset all filters
  const resetFilters = () => {
    setFilters({
      brands: [],
      years: [],
      engineCapacity: [0, 6],
      mileage: [0, 200000],
      transmissions: [],
      fuelTypes: [],
    })
  }

  // Count active filters
  const activeFilterCount =
    filters.brands.length +
    filters.years.length +
    filters.transmissions.length +
    filters.fuelTypes.length +
    (filters.engineCapacity[0] > 0 || filters.engineCapacity[1] < 5 ? 1 : 0) +
    (filters.mileage[0] > 0 || filters.mileage[1] < 100000 ? 1 : 0)

  // Filter sidebar content
  const FilterContent = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">Filters</h3>
        {activeFilterCount > 0 && (
          <Button variant="ghost" size="sm" onClick={resetFilters} className="h-8 text-sm">
            Clear all
          </Button>
        )}
      </div>

      <Accordion type="multiple" defaultValue={["brand", "year", "engine", "mileage", "transmission", "fuel"]}>
        <AccordionItem value="brand">
          <AccordionTrigger>Brand</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2">
              {brands.map((brand) => (
                <div key={brand} className="flex items-center space-x-2">
                  <Checkbox
                    id={`brand-${brand}`}
                    checked={filters.brands.includes(brand)}
                    onCheckedChange={() => toggleBrand(brand)}
                  />
                  <label htmlFor={`brand-${brand}`} className="text-sm cursor-pointer">
                    {brand}
                  </label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="year">
          <AccordionTrigger>Year</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2">
              {years.map((year) => (
                <div key={year} className="flex items-center space-x-2">
                  <Checkbox
                    id={`year-${year}`}
                    checked={filters.years.includes(year)}
                    onCheckedChange={() => toggleYear(year)}
                  />
                  <label htmlFor={`year-${year}`} className="text-sm cursor-pointer">
                    {year}
                  </label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="engine">
          <AccordionTrigger>Engine Capacity (L)</AccordionTrigger>
          <AccordionContent>
            <div className="px-2 pt-2 pb-6">
              <Slider
                defaultValue={[0, 5]}
                min={0}
                max={5}
                step={0.1}
                value={filters.engineCapacity}
                onValueChange={updateEngineCapacity}
              />
              <div className="flex justify-between mt-2 text-sm">
                <span>{filters.engineCapacity[0]}L</span>
                <span>{filters.engineCapacity[1]}L</span>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="mileage">
          <AccordionTrigger>Mileage (km)</AccordionTrigger>
          <AccordionContent>
            <div className="px-2 pt-2 pb-6">
              <Slider
                defaultValue={[0, 100000]}
                min={0}
                max={100000}
                step={1000}
                value={filters.mileage}
                onValueChange={(value) => updateMileage(value)}
              />
              <div className="flex justify-between mt-2 text-sm">
                <span>{filters.mileage[0].toLocaleString()}</span>
                <span>{filters.mileage[1].toLocaleString()}</span>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="transmission">
          <AccordionTrigger>Transmission</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2">
              {transmissions.map((transmission) => (
                <div key={transmission} className="flex items-center space-x-2">
                  <Checkbox
                    id={`transmission-${transmission}`}
                    checked={filters.transmissions.includes(transmission)}
                    onCheckedChange={() => toggleTransmission(transmission)}
                  />
                  <label htmlFor={`transmission-${transmission}`} className="text-sm cursor-pointer">
                    {transmission}
                  </label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="fuel">
          <AccordionTrigger>Fuel Type</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2">
              {fuelTypes.map((fuelType) => (
                <div key={fuelType} className="flex items-center space-x-2">
                  <Checkbox
                    id={`fuel-${fuelType}`}
                    checked={filters.fuelTypes.includes(fuelType)}
                    onCheckedChange={() => toggleFuelType(fuelType)}
                  />
                  <label htmlFor={`fuel-${fuelType}`} className="text-sm cursor-pointer">
                    {fuelType}
                  </label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Premium Used Cars</h1>

      <div className="lg:grid lg:grid-cols-[280px_1fr] gap-8">
        {/* Mobile filter button */}
        <div className="lg:hidden mb-4">
          <Sheet open={isFilterOpen} onOpenChange={setIsFilterOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" className="w-full flex items-center justify-between">
                <div className="flex items-center">
                  <Filter className="mr-2 h-4 w-4" />
                  Filters
                </div>
                {activeFilterCount > 0 && (
                  <Badge variant="secondary" className="ml-2">
                    {activeFilterCount}
                  </Badge>
                )}
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] sm:w-[350px]">
              <SheetHeader>
                <SheetTitle>Filters</SheetTitle>
                <SheetDescription>Narrow down your car search</SheetDescription>
              </SheetHeader>
              <div className="mt-6">
                <FilterContent />
              </div>
            </SheetContent>
          </Sheet>
        </div>

        {/* Desktop filter sidebar */}
        <div className="hidden lg:block">
          <div className="sticky top-8">
            <FilterContent />
          </div>
        </div>

        {/* Car grid */}
        <div>
          <div className="mb-4 flex justify-between items-center">
            <p className="text-muted-foreground">
              Showing <span className="font-medium text-foreground">{filteredCars.length}</span> cars
            </p>
          </div>

          {filteredCars.length === 0 ? (
            <div className="text-center py-12 border rounded-lg">
              <h3 className="text-lg font-medium mb-2">No cars match your filters</h3>
              <p className="text-muted-foreground mb-4">Try changing or resetting your filters</p>
              <Button onClick={resetFilters}>Reset all filters</Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredCars.map((car) => (
                <Card key={car.id} className="overflow-hidden">
                  <div className="relative h-48">
                    <Image src={car.image || "/placeholder.svg"} alt={car.title} fill className="object-cover" />
                  </div>
                  <CardContent className="p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-semibold text-lg">{car.title}</h3>
                      <p className="font-bold text-lg">${car.price.toLocaleString()}</p>
                    </div>
                    <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
                      <div className="flex items-center">
                        <span className="text-muted-foreground mr-2">Year:</span>
                        <span>{car.year}</span>
                      </div>
                      <div className="flex items-center">
                        <span className="text-muted-foreground mr-2">Mileage:</span>
                        <span>{car.mileage.toLocaleString()} km</span>
                      </div>
                      <div className="flex items-center">
                        <span className="text-muted-foreground mr-2">Engine:</span>
                        <span>{car.engineCapacity > 0 ? `${car.engineCapacity}L` : "N/A"}</span>
                      </div>
                      <div className="flex items-center">
                        <span className="text-muted-foreground mr-2">Fuel:</span>
                        <span>{car.fuelType}</span>
                      </div>
                    </div>
                    <div className="mt-4">
                      <Badge variant="outline" className="mr-2">
                        {car.transmission}
                      </Badge>
                      <Badge variant="outline">{car.brand}</Badge>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}


