import Header from '../components/Header'

function Home() {
  return (
    <div className=" h-[100vh] bg-fixed bg-cover bg-center bg-[url('https://amielfilarca.me/shopping-cart/static/media/rtx-3090.3aed8e8a.jpg')]" id='home'>
      <Header currPage='home'/>
      <div className="flex flex-col pt-[20vh] md:pt-[35vh] px-20">
        <h1 className="text-5xl font-bold italic py-6"><a href="/shop">BUILD THE WEBAPP OF THE FUTURE</a></h1>
        <p className="text-xl w-[70vw] md:w-[700px]">Shop here to assemble the ultimate cutting-edge teck-stack, optimized for tomorrow's expectations and your performance needs.</p>
      </div>
    </div>
  )
}

export default Home;