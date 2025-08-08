const site = {
  name: "Filip Antić",
  role: "Software Engineering Student",
  location: "Belgrade, Serbia",
  phone: "+381 65 804 7747",
  email: "filip.antic14@gmail.com",
  website: "https://filipantic.github.io",
  github: "https://github.com/fantic14",
  linkedin: "https://www.linkedin.com/in/filipantic/",
  languages: ["Serbian (native)", "English (fluent)"],
  skills: [
    "C", "Java", "SQL", "JavaScript",
    "HTML", "CSS",
    "Git", "Design patterns", "Basic networking"
  ],
  education: [
    {
      title: "B.Sc. in Software Engineering",
      school: "Union University — School of Computing",
      period: "2023 – present",
      gpa: "8.33"
    },
    { title: "High School",
      school: "Belgrade Sports Gymnasium",
      period: "2019 – 2023" }
  ],
  about: `Hi, my name is Filip. I was born in Belgrade in 2004 and I am currently attending
  "Računarski Fakultet" of Union University. In the past I was more of a sports type,
  playing professional water polo until 18. I also graduated from elementary music
  school "Mokranjac" playing the piano. While all that was great, my real passion has
  always been tinkering with computers.`,
  projects: [
    {
      name: "PlenumApp",
      description: "Mobile app that makes large meetings and voting easier and more convenient.",
      links: [
        { label: "Android download", href: "https://plenumapp.rs/download" },
        { label: "iOS App Store", href: "https://apps.apple.com/rs/app/plenum-app/id6747687756" }
      ]
    },
    {
      name: "DraftRoom",
      description: "Java app to organize furniture in multiple rooms and buildings (software design course).",
      links: [
        { label: "GitHub", href: "https://github.com/fantic14/Draft-Room" }
      ]
    },
    {
      name: "Clinic — New Beginning",
      description: "Java application with MySQL database (databases course).",
      links: [
        { label: "GitHub", href: "https://github.com/fantic14/clinic-new-beginning" }
      ]
    },
    {
      name: "Ethereum Crawler",
      description: "Web app to fetch all previous wallet transactions and compute balance on a given date.",
      links: [
        { label: "Frontend", href: "https://github.com/fantic14/ethcrawler-frontend" },
        { label: "Backend", href: "https://github.com/fantic14/ethcrawler-backend" }
      ]
    }
  ]
}

export default site
