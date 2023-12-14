export default function AboutStory() {
  return (
    <section className='bg-stone-100 flex md:flex-row flex-col items-center'>
      <div className='bg-[url(/public/about-image-one.svg)] md:w-1/2 w-full bg-cover h-[300px] md:h-[700px] bg-top'></div>
      <div className='flex flex-col mt-6 md:mt-0 gap-2 items-center justify-center w-full  md:w-1/2 text-center'>
        <h1 className='text-3xl uppercase'>Who we are</h1>
        <h6 className='capitalize text-lg'>
          Your One-Stop Web Development Shop
        </h6>
        <p className='md:w-2/4 lg:w-3/4 2xl:w-1/2 p-4 leading-8 text-sm'>
          {`         Do you have an idea for a website or app, but lack the skills to make
          it happen? At Veltrum Technologies and Solutions, we bring your vision
          to life through a wide range of web development services. Since 2000,
          we've provided clients with the tools and skills to overcome their
          online challenges. From the initial concept to the final result, we
          provide personalized attention and guidance throughout the whole
          process. As an industry-leading Web Development Agency, we have the
          experience and track record to help you succeed in today's digital
          age.`}
        </p>
      </div>
    </section>
  );
}
