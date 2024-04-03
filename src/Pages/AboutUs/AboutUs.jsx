import React from 'react'
import features from './../../imgs/features.svg'
import teamwork from './../../imgs/teamwork.svg'
import explaination from './../../imgs/explaination.png'
export default function AboutUs() {
  return (
<>

    <div className='bg-[#fefbff] h-auto flex flex-col gap-[5vh] w-screen overflow-clip mt-[5vh]'>
      
      <div className="flex flex-col  bg-yellow-50 p-[5vw] rounded-2xl font-semibold  font-sans text-center text-[0.8rem] md:text-[1.2rem] w-[95vw] md:w-[80%] mx-auto justify-center"> At Leadlly, we believe in fostering a student's true potential – not just through content memorization, but by equipping them with the tools and strategies to thrive in academics and beyond. We're a passionate team of educators, technologists, and student success advocates dedicated to bridging the gap between potential and achievement. <br/>

<span className='font-extrabold text-purple-900'> <br />Our Mission:</span> "To empower students with a holistic learning experience that cultivates academic success, intellectual growth, and a resilient mindset." 
</div>
      <div className="md:flex hidden w-[95vw] justify-between gap-[5vh] h-auto py-[5vh] mx-auto"> 


     


      <div className="flex flex-col p-5 font-sans bg-transparent rounded-2xl z-10 ring-2 ring-pink-100 ring-offset-2  drop-shadow-xl shadow-purple-200 font-semibold text-1rem justify-center w-[60vw]">
        <h1 className=' text-[2.5rem] text-[#ffb35c] '>What Sets us Apart</h1><br />
        <p className='opacity-100 md:text-[0.9rem] lg:text-[1.1rem] text-purple-950'> <span className='font-extrabold'>Seamless Tech Integration:</span> Ditch the bulky binders and scattered notes! Our interactive planners keep you organized, focused, and in control of your academic journey. Set personalized goals, efficiently track assignments, and access a treasure trove of valuable learning materials – all within one user-friendly, digital hub. <br /><br />
<span className='font-extrabold'>Growth Meter:</span> Visualize Your Success:* Celebrate your achievements and stay motivated with our interactive growth meter. Track your grades, identify areas where you've excelled, and witness your academic progress unfold throughout the year. <br /><br />
<span className='font-extrabold'>Strategic Revision Tools:</span> Don't waste time revising aimlessly. Our revision tracker helps you monitor progress, pinpoint areas needing improvement, and strategically allocate your revision time for maximum effectiveness.  <br /><br />
<span className='font-extrabold'>Your Big Brother/Sister in Learning:</span> Personalized Mentorship:* Get matched with a dedicated mentor – a recent topper who's been through it all! They'll provide invaluable guidance, answer your questions, offer subject-specific support, and motivate you just like a trusted older sibling. <br /><br />
<span className='font-extrabold'>Learn from Your Mistakes:</span> Interactive Error Book:* Go beyond rote memorization. Our interactive error book helps you identify and overcome common pitfalls specific to your learning style and subject matter. This personalized guide ensures you avoid repeating past mistakes and maximize your understanding. <br /><br />
<span className='font-extrabold'>Sharpen Your Thinking:</span> Intellectual Techniques Workshops:* We empower you beyond content knowledge. Our engaging workshops equip you with essential intellectual techniques crucial for academic success and lifelong learning. Develop critical thinking skills, master problem-solving strategies, and discover effective study methods. These workshops unlock your true potential to approach learning strategically, independently, and with confidence.  </p>  
        
        </div>
        <div className='w-[35vw] flex flex-col justify-center h-auto'> <img className='' src={explaination} alt="" /> </div>
       </div>



       <div className="md:flex bg-purple-50 hidden w-[100vw] justify-between px-[2.5vw] gap-[5vh] h-auto py-[5vh] mx-auto"> 
       <div className='w-[35vw] flex flex-col justify-end h-auto'> <img className='' src={features} alt="" /> </div>
      <div className="flex flex-col p-5 font-sans bg-transparent rounded-2xl z-10 ring-2 ring-pink-100 ring-offset-2  drop-shadow-xl shadow-purple-200 font-semibold text-1rem justify-center w-[45vw]">
        <h1 className=' text-[2.5rem] text-[#ffb35c] '>Why Choose Leadlly</h1>
        <p className='opacity-100 md:text-[0.9rem] font-sans lg:text-[1.1rem] text-purple-950'> <span className='font-extrabold'>Expert-Curated Content:</span> Gain access to a comprehensive library of learning materials, meticulously curated by subject matter experts, packed with valuable study tips and exam strategies. <br />
        <span className='font-extrabold'>Prioritizing Student Well-being:</span> We understand the pressure students face. Our platform promotes healthy habits and provides resources to help you combat stress and maintain a positive mindset for optimal learning. <br/>
        <span className='font-extrabold'>Supportive Community:</span> Connect with fellow students, share experiences, motivate each other on your academic journey, and build a network of like-minded individuals. <br/>
 </p>  
        
        </div>
      
       </div>

       <div className="md:flex hidden w-[95vw] justify-between gap-[5vh] h-auto py-[5vh] mx-auto"> 
      
      <div className="flex flex-col p-5 font-sans bg-transparent rounded-2xl z-10 ring-2 ring-pink-100 ring-offset-2  drop-shadow-xl shadow-purple-200 font-semibold text-1rem justify-center w-[60vw]">
        <h1 className=' text-[2.5rem] text-[#ffb35c] '>The Leadlly Team:</h1>
        <p className='opacity-100 md:text-[0.9rem] lg:text-[1.1rem] text-purple-950'>

We're a diverse team of passionate educators, technologists, and student success advocates. We believe in the power of education to transform lives, and we're driven by the desire to empower students, unlock their potential, and help them not just achieve academic success but also develop the intellectual skills and well-being to thrive in the ever-evolving world </p>  
        
        </div>
        <div className='w-[35vw] flex flex-col justify-end h-auto'> <img className='' src={teamwork} alt="" /> </div>
       </div>



{/* phone  */}
<div className="md:hidden">

<div className="flex flex-col p-5 font-sans bg-transparent rounded-2xl z-10 ring-2 ring-pink-100 ring-offset-2  drop-shadow-xl shadow-purple-200 font-semibold text-1rem justify-center w-[100vw]">
        <h1 className=' text-[2.5rem] text-[#ffb35c] '>What Sets us Apart</h1><br />
        <p className='opacity-100 md:text-[0.9rem] lg:text-[1.1rem] text-purple-950'> <span className='font-extrabold'>Seamless Tech Integration:</span> Ditch the bulky binders and scattered notes! Our interactive planners keep you organized, focused, and in control of your academic journey. Set personalized goals, efficiently track assignments, and access a treasure trove of valuable learning materials – all within one user-friendly, digital hub. <br /><br />
<span className='font-extrabold'>Growth Meter:</span> Visualize Your Success:* Celebrate your achievements and stay motivated with our interactive growth meter. Track your grades, identify areas where you've excelled, and witness your academic progress unfold throughout the year. <br /><br />
<span className='font-extrabold'>Strategic Revision Tools:</span> Don't waste time revising aimlessly. Our revision tracker helps you monitor progress, pinpoint areas needing improvement, and strategically allocate your revision time for maximum effectiveness.  <br /><br />
<span className='font-extrabold'>Your Big Brother/Sister in Learning:</span> Personalized Mentorship:* Get matched with a dedicated mentor – a recent topper who's been through it all! They'll provide invaluable guidance, answer your questions, offer subject-specific support, and motivate you just like a trusted older sibling. <br /><br />
<span className='font-extrabold'>Learn from Your Mistakes:</span> Interactive Error Book:* Go beyond rote memorization. Our interactive error book helps you identify and overcome common pitfalls specific to your learning style and subject matter. This personalized guide ensures you avoid repeating past mistakes and maximize your understanding. <br /><br />
<span className='font-extrabold'>Sharpen Your Thinking:</span> Intellectual Techniques Workshops:* We empower you beyond content knowledge. Our engaging workshops equip you with essential intellectual techniques crucial for academic success and lifelong learning. Develop critical thinking skills, master problem-solving strategies, and discover effective study methods. These workshops unlock your true potential to approach learning strategically, independently, and with confidence.  </p>  
        
        </div>
        <div className='w-[100vw] flex flex-col justify-center h-auto'> <img className='' src={explaination} alt="" /> </div>
       



       <div className="md:hidden flex-col bg-purple-50 flex w-[100vw] justify-between px-[2.5vw] gap-[5vh] h-auto py-[5vh] mx-auto"> 
       
      <div className="flex flex-col p-5 font-sans bg-transparent rounded-2xl z-10 ring-2 ring-pink-100 ring-offset-2  drop-shadow-xl shadow-purple-200 font-semibold text-1rem justify-center w-[100vw]">
        <h1 className=' text-[2.5rem] text-[#ffb35c] '>Why Choose Leadlly</h1>
        <p className='opacity-100 md:text-[0.9rem] font-sans lg:text-[1.1rem] text-purple-950'> <span className='font-extrabold'>Expert-Curated Content:</span> Gain access to a comprehensive library of learning materials, meticulously curated by subject matter experts, packed with valuable study tips and exam strategies. <br />
        <span className='font-extrabold'>Prioritizing Student Well-being:</span> We understand the pressure students face. Our platform promotes healthy habits and provides resources to help you combat stress and maintain a positive mindset for optimal learning. <br/>
        <span className='font-extrabold'>Supportive Community:</span> Connect with fellow students, share experiences, motivate each other on your academic journey, and build a network of like-minded individuals. <br/>
 </p>  
        
        </div>
        <div className='w-[100vw] flex flex-col justify-end h-auto'> <img className='' src={features} alt="" /> </div>
      
       </div>

       <div className="md:hidden flex flex-col w-[95vw] justify-between gap-[5vh] h-auto py-[5vh] mx-auto"> 
      
      <div className="flex flex-col p-5 font-sans bg-transparent rounded-2xl z-10 ring-2 ring-pink-100 ring-offset-2  drop-shadow-xl shadow-purple-200 font-semibold text-1rem justify-center w-[95vw]">
        <h1 className=' text-[2.5rem] text-[#ffb35c] '>The Leadlly Team:</h1>
        <p className='opacity-100 md:text-[0.9rem] lg:text-[1.1rem] text-purple-950'>

We're a diverse team of passionate educators, technologists, and student success advocates. We believe in the power of education to transform lives, and we're driven by the desire to empower students, unlock their potential, and help them not just achieve academic success but also develop the intellectual skills and well-being to thrive in the ever-evolving world </p>  
        
        </div>
        <div className='w-[100vw] flex flex-col justify-end h-auto'> <img className='' src={teamwork} alt="" /> </div>
       </div>


       </div></div>
    
    

</>
  )
}
