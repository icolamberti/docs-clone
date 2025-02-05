import { templates } from '@/Constants/templates'
import { cn } from '@/Lib/utils'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '../Ui/carousel'

export default function () {
  const isCreating = false

  return (
    <div className='bg-[#f1f3f4]'>
      <div className='mx-auto flex max-w-screen-xl flex-col gap-y-4 px-16 py-6'>
        <h3 className='font-medium'>Start a new document</h3>

        <Carousel>
          <CarouselContent className='-ml-4'>
            {templates.map(template => (
              <CarouselItem
                key={template.id}
                className='basis-1/2 pl-4 sm:basis-1/3 md:basis-1/4 lg:basis-1/5 xl:basis-1/6 2xl:basis-[14.285714%]'
              >
                <div
                  className={cn(
                    'flex aspect-[3/4] flex-col gap-y-2.5',
                    isCreating && 'pointer-events-none opacity-50',
                  )}
                >
                  <button
                    disabled={isCreating}
                    onClick={() => {}}
                    style={{
                      backgroundImage: `url(${template.imageUrl})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      backgroundRepeat: 'no-repeat',
                    }}
                    className='flex size-full flex-col items-center justify-center gap-y-4 rounded-sm border bg-white transition hover:border-blue-500 hover:bg-blue-50'
                  />

                  <p className='truncate text-sm font-medium'>
                    {template.label}
                  </p>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  )
}
