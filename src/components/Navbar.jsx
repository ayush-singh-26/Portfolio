import React from "react";

function Navbar() {

    return (
        <>
            <div className="bg-gray-800">
                <div className="container mx-auto flex justify-center">
                    <ul className="flex space-x-8 p-4">
                        <li>
                            <a href="#" className="text-white hover:text-gray-400 transition duration-300">HOME</a>
                        </li>
                        <li>
                            <a href="#" className="text-white hover:text-gray-400 transition duration-300">ABOUT</a>
                        </li>
                        <li>
                            <a href="#" className="text-white hover:text-gray-400 transition duration-300">PROJECTS</a>
                        </li>
                        <li>
                            <a href="#" className="text-white hover:text-gray-400 transition duration-300">SKILLS</a>
                        </li>
                        <li>
                            <a href="#" className="text-white hover:text-gray-400 transition duration-300">CONTACT</a>
                        </li>
                    </ul>
                </div>
            </div>

        </>
    )
}

export default Navbar;
