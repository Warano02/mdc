import CustomScrollbar from "@/components/custom-scroll"
import SignupDialog from "@/components/SignupDialog"
import Accordilon from "@/components/works/faq-jobs-accordilon"
import SingleOffer from "@/components/works/single-offer"
import Link from "next/link"

export const metadata = {
  title: "Find & Apply for Jobs - MDC Canada",
}

interface IJobName {
  name: string
  cover: string
}

const PopularJobs: IJobName[] = [
  {
    name: "Registered Nurse",
    cover: "/img/de4f26ef-8b7e-409b-b1d8-fe6cf84b4b46.png",
  },
  {
    name: "Cleaner",
    cover:
      "/img/67898598-d04e-4500-bd3e-d4f062ed38fc.png",
  },
  {
    name: "Caregiver",
    cover: "/img/4a21613c-1ffa-4f52-9a08-6203e65cf112.png",
  },
  {
    name: "Personal Support Worker",
    cover: "/img/f6f2e745-87ba-4135-a63d-65e76ae5d025.png",
  },
  {
    name: "Accounting Specialist",
    cover: "/img/52b778fb-fe79-4149-9b05-b0224edcdd05.png",
  },
  {
    name: "Private Tutor",
    cover: "/img/fbac4a57-d8dd-495b-b0cf-87cc2e4552c7.png",
  },
]

function Page() {
  return (
    <main className="w-full">
      <section
        className="w-full h-[32em] bg-cover bg-center bg-no-repeat relative"
        style={{
          backgroundImage:
            "url('/img/bg/4ce6c4ce-c134-4ce1-bb46-01a188f53bce.png')",
        }}
      >
        <div className="absolute inset-0 bg-linear-to-l from-[rgba(20,4,92,0.23)] to-[rgba(3,8,59,0.57)]" />

        <div className="container relative z-10 h-full flex flex-col justify-center">
          <div className="ml-12 flex flex-col justify-center w-[50em] max-w-full text-white max-md:ml-0 max-md:items-center max-md:w-full">

            <h1 className="text-white text-5xl font-bold mb-6 max-sm:text-4xl max-sm:text-center max-[450px]:text-3xl">
              Find your next opportunity
            </h1>

            <p className="text-lg font-bold mb-10 max-sm:w-[95%] max-sm:text-center">
              Discover the right jobs and apply easily with MDC Canada.
            </p>

            <SignupDialog>
              <button className="w-[10em] h-10 font-bold border-2 border-white text-white bg-transparent hover:bg-white hover:text-primary transition-colors duration-300 cursor-pointer">
                GET STARTED
              </button>
            </SignupDialog>

          </div>
        </div>
      </section>

      <section className="container space-y-12 mt-12">

        <h1 className="text-4xl max-w-3xl container">
          Explore jobs
          <br />
          <span className="font-bold">
            in high-demand fields
          </span>
        </h1>

        <CustomScrollbar>
          {PopularJobs.map((job) => (
            <SingleJobName
              key={job.cover}
              {...job}
            />
          ))}
        </CustomScrollbar>

      </section>

      <section className="container my-18 space-y-18">

        <h1 className="text-4xl max-w-3xl container">
          Discover
          <br />
          <span className="font-bold">
            the latest job opportunities
          </span>
        </h1>

        <CustomScrollbar size={365}>
          <SingleOffer />
        </CustomScrollbar>

        <div className="container">
          <SignupDialog>
            <button className="px-8 py-4 rounded-xl bg-primary  text-white cursor-pointer">
              Browse All Jobs
            </button>
          </SignupDialog>
        </div>

      </section>
      <section className="container my-12 space-y-6">
        <h1 className="text-4xl max-w-3xl container">
          Frequently Asked Questions
          <br />
          <span className="font-bold">
            About Job Searching
          </span>
        </h1>

        <p className="container text-[16px]">
          Looking for your next opportunity? Discover job openings from different
          employers and find positions that match your skills, experience, and career
          goals. Whether you are starting your career, looking for a new challenge,
          or seeking flexible work opportunities, use our job listings to explore
          available positions, compare opportunities, and apply online with ease.
        </p>

        <div className="container flex gap-4 flex-wrap">

          <Accordilon
            title="How can I find a job on MDC?"
            content="Start by exploring our available job listings and browse opportunities by profession, location, or keywords. Review the job requirements and description, choose an opportunity that matches your profile, and follow the application process to submit your application."
          />

          <Accordilon
            title="Can I find a job without previous experience?"
            content="Yes. Some employers offer entry-level positions that do not require extensive professional experience. Look for opportunities marked as entry-level, junior, trainee, or positions where experience is not listed as a strict requirement. Focus on highlighting your skills, motivation, education, and transferable experience."
          />

          <Accordilon
            title="How can I find jobs that match my skills?"
            content="Use relevant keywords when searching for jobs and explore opportunities by profession or field. Carefully review each job description, required skills, qualifications, and responsibilities to identify positions that match your profile and career goals."
          />

          <Accordilon
            title="How can I apply for a job?"
            content="Open the job listing you are interested in and review the requirements and application details. When you are ready, follow the application instructions provided by the employer and submit the required information or documents. Make sure your application is complete and up to date before submitting it."
          />

        </div>
      </section>
      <div className="w-full h-[19em] bg-[url('/img/img_infobanner_desktop_whyuseRCIC1.jpg')] bg-cover bg-center flex justify-center items-center max-[660px]:h-[25em] max-[440px]:h-[35em]">
        <h2 className="container text-center leading-[1.5em] text-white text-[2em] max-[1135px]:text-[1.5em]">
          Finding the right job does not have to be complicated. Discover
          opportunities that match your skills, explore trusted job listings, and
          take the next step toward your career with a simple and convenient
          application process.
        </h2>
      </div>

      <section className="w-full min-h-[32em] bg-[#f7f7f7] flex justify-center items-center mt-[0.2em] max-[750px]:h-auto">

        <div className="container h-[90%] flex justify-between p-8 max-[750px]:flex-col max-[750px]:p-4">

          <div className="w-[60%] flex justify-center mt-8 pt-16 relative max-[1025px]:w-[50%] max-[750px]:w-full max-[750px]:mt-4 max-[750px]:pt-4 max-[750px]:mb-8">

            <h1 className="text-[3em] text-primary font-(--font-heading) relative after:content-[''] after:absolute after:w-8 after:h-0.5 after:bg-[#dc3545] after:top-[1.3em] after:left-0 max-[1025px]:text-[2em] max-[475px]:text-[2em]">
              Why Apply Through MDC?
            </h1>

          </div>

          <div className="w-[70%] flex flex-col justify-center gap-4 max-[750px]:w-full">

            <p className="leading-[1.6em] tracking-[0.5px] text-gray-800 font-medium">
              Finding the right job can be time-consuming. With MDC, you can
              discover relevant job opportunities in one convenient place and
              focus on positions that match your skills and career goals.
            </p>

            <p className="leading-[1.6em] tracking-[0.5px] text-gray-800 font-medium">
              Browse job opportunities from different employers, explore
              available positions, and easily access the information you need
              before applying.
            </p>

            <p className="leading-[1.6em] tracking-[0.5px] text-gray-800 font-medium">
              Whether you are starting your career or looking for your next
              opportunity, MDC helps make your job search simpler, faster, and
              more convenient.
            </p>

          </div>

        </div>

      </section>

    </main>
  )
}

const SingleJobName = ({ name, cover }: IJobName) => {
  return (
    <SignupDialog>
      <div
        className="block w-75.5 h-42.5 shrink-0 rounded-lg group overflow-hidden relative hover:scale-95 transition-all cursor-pointer"
        title={`${name} jobs`}
        style={{
          backgroundImage: `url(${cover})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="w-full h-full bg-[#0000008e] p-6 flex items-end text-2xl text-white font-bold group-hover:text-[22px] transition-all">
          {name}
        </div>
      </div>
    </SignupDialog>
  )
}

export default Page