/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect} from 'react'
import frontImage from './main.png'
import atom from './atom-1.png'
import thumbnail from './thumbnail.png'


function MainBody() {

    const [activeLink, setActiveLink] = useState("introduction");
    const [toggleOn, setToggleOn] = useState(false)

    const sections = [
        { id: 'introduction', label: 'Introduction' },
        { id: 'quandoom-challenges', label: 'Quandoom Technical Challenges' },
        { id: 'simulation', label: 'Simulation on Classical Computers' },
        { id: 'unique-gameplay', label: 'Unique Gameplay Features' },
        { id: 'development-insights', label: 'Development Insights and Future' },
    ];

    useEffect(() => {
        const observerOptions = {
            root: null, 
            rootMargin: '0px',
            threshold: Array.from({length: 8}, (_, i) => i * 0.1) 
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && activeLink !== entry.target.id) {
                        setActiveLink(entry.target.id);
                }
            });
        }, observerOptions);

        sections.forEach(section => {
            const element = document.getElementById(section.id);
            if (element) {
                observer.observe(element);
            }
        });

        return () => {
            sections.forEach(section => {
                const element = document.getElementById(section.id);
                if (element) {
                    observer.unobserve(element);
                }
            });
        };
    }, [sections, activeLink]);

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            const scrollToPosition = element.offsetTop - 100; 
            window.scrollTo({
                top: scrollToPosition,
                behavior: 'smooth'
            });
    
            setActiveLink(id);
        }
    };

    const toggleHandler = () => {
        setToggleOn(!toggleOn);
      };


  return (
    <div className='relative min-w-[300px] w-full max-w-[1770px] h-fit flex flex-col items-center border-t rounded-b-xl bg-white px-4' id='introduction'>
        <div className='w-[1200px] h-full'>
            <img alt="frontImage" src={frontImage} className='w-full h-[300px] border rounded-xl mt-4'/>
            <div className='flex flex-col grid grid-cols-12 items-start justify-between w-full gap-4'>
                <div className='relative mt-4 col-span-4 col-start-9 row-start-1 scroll-x-auto'>
                <div className={`flex flex-col items-start fixed ${activeLink === "introduction"  ? 'top-auto' : 'top-0'}  lg:left-[1000px] md:left-[900px] xl:left-auto font-semibold opacity-80 ml-14 gap-y-4`}>
                    {sections.map(section => (
                            <div key={section.id} className='flex items-center'>
                                <div className={`w-0.5 h-4 mr-2 ${activeLink === section.id ? 'bg-black' : 'bg-gray-400'}`} />
                                <p className={`line-clamp-2 ${activeLink === section.id ? 'text-[#0B132B]' : 'hover:text-[#132F38]'}`}>
                                    <a href={`#${section.id}`} onClick={() => {scrollToSection(section.id); setActiveLink(section.id);}}>
                                        {section.label}
                                    </a>
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className='col-span-12 col-start-1 row-start-1'>
                    <div className='mt-12 w-[800px]'>
                        <p className='text-4xl w-[500px] text-left' >Quantum Computer Doom Challenge</p>
                        <div className="my-8 flex items-center">
                            <div className='flex items-center gap-2'>
                                <img alt="thumbnail" src={thumbnail} className='border rounded-full bg-blue h-12 w-12'/>
                                <div className='text-left opacity-80 font-semibold'>
                                    <p className='text-m'>Curated by elymc</p>
                                    <p className='text-sm'>2 min read</p>
                                </div>
                            </div>
                            <div className='flex gap-2 text-sm opacity-80 font-semibold ml-auto mr-10'>
                                <p>12 days ago</p>
                                <p>46,914</p>
                                <p>2,294</p>
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <p className="w-full text-xl text-start flex items-start opacity-80 font-semibold">
                                <span className="text-5xl">A</span>
                                <span className="ml-2">
                                    ccording to PC Gamer, the quantum computer adaptation of the iconic game DOOM, known as Quandoom, faces significant technical challenges due to its requirement 
                            </span>
                                </p>
                            <p className="text-xl text-start opacity-80 font-semibold w-full">for 72,376 qubits and 80 million quantum gates, far exceeding the capabilities of today's most advanced quantum computers.</p>
                        </div>
                        <div className='flex gap-2 mt-4 w-full'>
                            <div className='relative group border rounded-xl h-[150px] w-[200px] bg-[#F5F5F5]'>
                                <p className='my-auto'>'DOOM' is finally being ported to quantum computers, but there are</p>
                                <div className='mt-20 absolute left-1/2 transform -translate-x-1/2 mt-2 hidden group-hover:block text-xs w-[300px] h-[120px] bg-white border border-gray-300 rounded-md shadow-lg p-2'>
                                    'DOOM' is finally being ported to quantum computers, but there are ...
                                    DOOM , released in 1993, is a pioneer of first-person shooter (FPS) games and is also famous for being ported to all kinds of devices, including car navigation systems
                                </div>
                            </div>
                            <div className='relative group border rounded-xl h-[150px] w-[200px] bg-[#F5F5F5]'>
                                <p className='my-auto'>DOOM can now run on a quantum computer with Quandoom port</p>
                                <div className='mt-20 absolute left-1/2 transform -translate-x-1/2 mt-2 hidden group-hover:block text-xs w-[300px] h-[120px] bg-white border border-gray-300 rounded-md shadow-lg p-2'>
                                    DOOM can now run on a quantum computer with Quandoom port
                                    DOOM has been ported to quantum computers, marking another milestone for this seminal 3D gaming title. However, the coder behind this feat admits that there is
                                </div>
                            </div>
                            <div className='relative group border rounded-xl h-[150px] w-[200px] bg-[#F5F5F5]'>
                                <p className='my-auto'>Doom finally ported to quantum computers, and you can play it now</p>
                                <div className='mt-20 absolute left-1/2 transform -translate-x-1/2 mt-2 hidden group-hover:block text-xs w-[300px] h-[120px] bg-white border border-gray-300 rounded-md shadow-lg p-2'>
                                    Doom finally ported to quantum computers, and you can play it now
                                    A new port of the first-person shooter Doom has been developed to run on quantum computers. Known as Quandoom, the version was created by Luke Mortimer,
                                </div>
                            </div>
                            <div className='border rounded-xl h-[150px] w-[200px] bg-[#F5F5F5]'>
                                <p className='mt-auto'>view 2 more</p>
                            </div>
                        </div>
                        <p className='mt-12 text-2xl' id="quandoom-challenges">Quandoom Technical Challenges</p>
                        <div className='flex gap-1'>
                            <p className='text-l font-semibold opacity-80 mt-4 text-left w-full'>Quandoom, the quantum computer port of DOOM, presents significant technical challenges that push the boundaries of current quantum computing capabilities. The project requires a staggering 72,376 qubits and 80 million quantum gates to run, far exceeding the capabilities of even the most advanced quantum computers available today12. For comparison, the current record holder for the most powerful quantum computer,</p>
                            <img alt="frontImage" src={atom} className='h-[150px] w-[400px] border-none rounded-xl mt-4' />
                        </div>
                        <p className='text-l font-semibold opacity-80 mt-4 text-left w-full'>developed by Atom Computing, boasts only 1,225 qubits3. This massive disparity highlights the ambitious nature of Quandoom and underscores the substantial advancements needed in quantum computing hardware before such complex applications can be natively executed.</p>
                        <div className='border rounded-full px-8 py-4 m-4 w-fit h-fit'>Sources</div>
                        <p className='mt-12 text-2xl'>Simulation on Classical Computers</p>
                        <p className='text-l font-semibold opacity-80 mt-4 text-left w-full'>Despite the lack of suitable quantum hardware, enthusiasts can experience Quandoom through a lightweight QASM simulator designed to run on classical computers. This simulator, consisting of just 150 lines of C++ code, allows the game to achieve 10-20 frames per second on a standard laptop12. To play Quandoom, users can download the files from GitHub and drag the QASM file onto the simulator executable. However, the simulation requires a substantial 5-6 GB of RAM to load, reflecting the complexity of the quantum circuit being emulated32. This classical simulation approach provides a glimpse into the potential of quantum gaming while highlighting the significant computational demands of translating quantum algorithms to traditional hardware.</p>
                        <div className='border rounded-full px-8 py-4 m-4 w-fit h-fit' id="simulation">Sources</div>
                        <p className='mt-12 text-2xl'>Unique Gameplay Features</p>
                        <p className='text-l font-semibold opacity-80 mt-4 text-left w-full'>Quandoom offers a distinctive gaming experience with its wireframe graphics, reminiscent of early vector graphics shooters from the 1980s1. This "X-ray mode" visualization provides a unique aesthetic while simplifying the rendering process for quantum computation. The game features several departures from the original DOOM, including the absence of color, music, and sound effects2. Enemies are confined to single rooms, and the imp's signature fireball attack has been transformed into a hitscan weapon2. These modifications were necessary to adapt the game for quantum computing constraints and to maintain reversibility in quantum operations3.</p>
                        <div className='border rounded-full px-8 py-4 m-4 w-fit h-fit' id='unique-gameplay'>Sources</div>
                        <p className='mt-12 text-2xl'>Development Insights and Future</p>
                        <p className='text-l font-semibold opacity-80 mt-4 text-left w-full'>Luke Mortimer, the creator of Quandoom, spent approximately a year developing this ambitious project before moving on1. The development process involved writing about 8,000 lines of C++ code to create a small 3D engine and implement game logic using quantum registers2. Mortimer's work includes innovative features such as an ancilla system, a garbage system, and a quantum subroutine system2. While only the first level is currently playable, the project's GitHub repository hints at the possibility of expanding the game and making the source code available if there's sufficient interest from the community23. This groundbreaking effort not only showcases the potential for gaming on quantum architectures but also serves as a unique benchmark for the progress of quantum computing technology.</p>
                        <div className='border rounded-full px-8 py-4 m-4 w-fit h-fit' id='development-insights'>Sources</div>
                    </div>
                </div>  
            </div>
        </div>
        <div className='flex items-center border-none rounded-full sticky bottom-6 left-1/2 transform -translate-x-1/2 z-50 bg-[#F5F5F5] p-2.5 w-[90%] max-w-[700px] h-[80px]'>
            <div className='flex items-center justify-between border rounded-full bg-white w-full h-full p-2 opacity-80'>
                <p className='text-sm md:text-base'>Ask Follow-Up</p>
                <div className='flex gap-2 items-center'>
                    <button
                        type="button"
                        className="border rounded-full h-6 w-12 relative flex items-center bg-white"
                        onClick={toggleHandler}
                    >
                        <div
                            className={`h-[15px] w-[15px] rounded-full absolute transition-transform shadow-new-md ${
                                toggleOn ? 'right-1 bg-[#15616D]' : 'left-1 bg-gray-600'
                            }`}
                        />
                    </button>
                    <p className='text-sm md:text-base'>Pro</p>
                    <div className='border rounded-full h-12 w-12 bg-[#F5F5F5]' />
                </div>
            </div>
        </div>
    </div>
  )
}

export default MainBody