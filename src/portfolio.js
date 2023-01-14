const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: '',
  title: 'Simran Sankhala',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Simran Sankhala',
  role: 'Security Engineer',
  description:
    'Having 3+ Years of Industry Experience',
  resume: 'https://drive.google.com/file/d/1sL2BvouftNdB7pc1ck6la9zhgUgWCGqW/view?usp=sharing',
  social: {
    linkedin: 'https://www.linkedin.com/in/simran-sankhala/',
    github: 'https://github.com/simran-sankhala',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'OSCP',
    description:
      'Offensive Security Certified Professional',
    stack: ['Offensive Security'],
    livePreview: 'https://www.credential.net/4d2a913c-4b45-42c6-8ea6-9a617e230343#gs.mbyozd',
  },
  {
    name: 'CRTP',
    description:
      'Certified Red Team Professional',
    stack: ['Pentester Academy'],
    livePreview: 'https://www.credential.net/037a8507-3e13-48fd-a61b-1bd1476d91c7',
  },
  {
    name: 'CTIA',
    description:
      'Certified Threat Intelligence Analyst',
    stack: ['EC-Council'],
    livePreview: 'https://drive.google.com/file/d/1skA8HcrPD2npTnxLBZ6z2i1T8pTxjN8N/view?usp=sharing',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'Web App Penetration Testing',
  'Network Penetration Testing',
  'API Penetration Testing',
  'Active Directory',
  'Thick Client Penetration Testing',
  'Python',
  'Bash Scripting',
  'Bug Bounty',
  'CTF'
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'simransankhala08@mail.com',
}

export { header, about, projects, skills, contact }
