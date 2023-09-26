import {languages, webDev, techTools} from "../../Info"
import "./Skills.css"

const Skills = () => {
  return (
      <div className="flex flex-col m-auto justify-normal w-full">
          <h2 className="text-4xl text-left font-semibold text-[#646cff] mb-7 mr-32 underline underline-offset-8">
              Skills
          </h2>
          <div className="w-full flex flex-row justify-between mb-48">
              <div className="column-container">
                  <h3 className="container-header">Languages</h3>
                  <ul className="mb-7">
                      {languages.map((language) => (
                          <li key={language} className="py-2">
                              {language}
                          </li>
                      ))}
                  </ul>
              </div>
              <div className="column-container mx-16">
                  <h3 className="container-header">Web Dev</h3>
                  <ul className="mb-7">
                      {webDev.map((tool) => (
                          <li key={tool} className="py-2">
                              {tool}
                          </li>
                      ))}
                  </ul>
              </div>
              <div className="column-container">
                  <h3 className="container-header">Technologies</h3>
                  <ul className="mb-7">
                      {techTools.map((tool) => (
                          <li key={tool} className="py-2">
                              {tool}
                          </li>
                      ))}
                  </ul>
              </div>
          </div>
      </div>
  );
}

export default Skills
