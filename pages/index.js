import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="min-h-screen bg-blue-50">
      <div className="pt-10 ml-20 text-3xl font-semibold">Betterteem</div>
        <div className="grid grid-flow-col auto-cols-max gap-20 font-thin text-lg justify-center -mt-8 ml-30">
          <div className="focus:ring-opacity-50">Home</div>
          <div>About</div>
          <div>Contact</div>        
        </div>
        <div className="flex justify-end mr-20 -mt-7">
          <button className="bg-blue-500 hover:bg-blue-700 rounded-2xl h-8 w-28 text-cyan-50 focus:outline-none focus:ring-2 focus:ring-opacity-50 "><a href="/signIn">Log out</a></button>
        </div>
        <div className="text-3xl font-bold p-20 pb-1 mt-15 align-center text-center">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem iste perspiciatis rerum, pariatur minima officia ad accusamus</div>
        <div className="text-xl font-thin p-8 align-center text-center">Be part of our growing team here in the Philippines</div>
        <div className="flex justify-center">
          <img src="https://image.freepik.com/free-vector/employer-growing-business-professionals-metaphor-hand-watering-plants-employees-flowerpots-vector-illustration-growth-development-career-training-concept_74855-9857.jpg"></img>
        </div>
        <div className="fixed bg-blue-200 text-center h-10 w-full pt-2 bottom-3">
          <p> All Rights Reserved 2021</p>
        </div>
    </div>

  )
}
