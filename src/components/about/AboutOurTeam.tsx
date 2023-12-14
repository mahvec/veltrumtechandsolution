type TOurTeam = {
  avatar: string;
  name: string;
  quote: string;
  email: string;
  title: string;
};

const outTeamData: TOurTeam[] = [
  {
    avatar: "/public/about-image-two.svg",
    name: "Wisdom Ekeh",
    quote: `Wisdom Ekeh has a mind teeming with innovative ideas and outside-the-box solutions. Come by to enjoy a private consultation with our Co-founder who is ready to advise you on what your website should and could look like.`,
    email: "wisdom.dev21@gmail.com",
    title: "Software Developer/Co-founder",
  },
  {
    avatar: "/public/about-image-three.svg",
    name: "Victor Opone",
    quote: `It didn’t take long for Victor opone to make a big impact as our new Senior Developer. Professionalism to a tee and never without a smile, Victor opone is more than an asset to the Veltrum Technologies and Solutions family.`,
    email: "wisdom.dev21@gmail.com",
    title: "Software Developer/Co-founder",
  },
  {
    avatar: "/public/about-image-four.svg",
    name: "Ibrahim Samuel",
    quote: ` Experienced, trustworthy, fun. These are just a few of the ways coworkers describe this invaluable member of our team. Ibrahim Samuel is truly a joy to be around and makes it a pleasure to come to work every single day.`,
    email: "wisdom.dev21@gmail.com",
    title: "Backend Developer/Co-founder",
  },
];

export default function AboutOurTeam() {
  return (
    <section className='p-16 bg-cyan-50'>
      <div className='max-w-5xl mx-auto  '>
        <div className='grid gap-3 place-items-center'>
          <h2 className='uppercase text-4xl'>Our team</h2>
          <h6 className='capitalize  '>We Get the Job Done Right</h6>
          <p className='leading-8 text-center text-sm'>
            Our people are at the core of what makes Veltrum Technologies and
            Solutions such a unique place to work. We’re proud of the diversity
            of our staff, since each member has unique skills they bring to each
            project. Together, we’ve experienced the planning and implementation
            process of some of the most innovative digital experiences for
            beloved clients across several industries. Find out more about some
            of our team members below.
          </p>
        </div>
        <section className='mt-36 '>
          {outTeamData.map((data, dataIdx) => {
            return (
              <div
                className='grid place-items-center mb-16 gap-4'
                key={dataIdx}
              >
                <div
                  className={` bg-cover bg-center w-full h-[500px]`}
                  style={{
                    backgroundImage: `url(${data.avatar})`,
                  }}
                ></div>
                <h3 className='capitalize'>{data.name}</h3>
                <h5>{data.title}</h5>
                <p className='text-center text-sm'>{data.quote}</p>
                <a href={`mailto:${data.email}`} className='underline text-sm'>
                  {data.email}
                </a>
              </div>
            );
          })}
        </section>
      </div>
    </section>
  );
}
