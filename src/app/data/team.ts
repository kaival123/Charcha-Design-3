export interface Milestone {
  when?: string;
  title: string;
  detail?: string;
}

export interface Profile {
  slug: string;
  name: string;
  initials: string;
  photo: string;
  role: string;
  facts: { value: string; label: string }[];
  bio: string[];
  milestones: Milestone[];
  education: string[];
}

export const TEAM: Profile[] = [
  {
    slug: 'anupam-daftuar',
    name: 'Anupam Daftuar',
    initials: 'AD',
    photo: 'images/team/anupam-daftuar.jpg',
    role: 'Research & communications professional, entrepreneur',
    facts: [
      { value: '20+', label: 'years in research, advocacy & media' },
      { value: '2006', label: 'founded Invision Communications & Research' },
      { value: '10 yrs', label: 'publishing EnergyNext' },
    ],
    bio: [
      'Anupam Daftuar is a research and communications professional and entrepreneur with over two decades of experience in research, advocacy, content analysis and media. She is Director of Invision Communications & Research Pvt. Ltd., which she has led since its founding in 2006, delivering research, content and communication solutions to central and state governments, corporates, trade bodies and NGOs. Since 2019, she has also been a Director of Incore Business Solutions LLP, a market research, public relations and social media consultancy.',
      "From 2010 to 2020, she was Founder and Publication Director of EnergyNext, a monthly renewable energy trade magazine published by Focal Point Media Services Pvt. Ltd. and supported by IREDA. Under her leadership, the magazine was named jury's choice for Best Renewable Energy Publication at the REI Expo 2017 and received a letter of appreciation from then Power Minister Piyush Goyal in 2016.",
      'Her research has focused on women-centric issues, including a content analysis of women in the press ("Still Invisible"), a performance audit of women police stations, and a study of hostels for OBC girls. Earlier, as Associate Dean of the MG School of Communications Management (1998–2006), she oversaw training, evaluation and research programmes and helped design its curriculum.',
    ],
    milestones: [
      {
        when: '1998–2006',
        title: 'Associate Dean, MG School of Communications Management',
        detail: 'Oversaw training, evaluation and research programmes; helped design the curriculum.',
      },
      {
        when: '2006 – present',
        title: 'Director, Invision Communications & Research Pvt. Ltd.',
        detail: 'Research, content and communication solutions for governments, corporates, trade bodies and NGOs.',
      },
      {
        when: '2010–2020',
        title: 'Founder & Publication Director, EnergyNext',
        detail: 'Monthly renewable energy trade magazine supported by IREDA.',
      },
      {
        when: '2016',
        title: 'Letter of appreciation from then Power Minister Piyush Goyal',
      },
      {
        when: '2017',
        title: "Jury's choice — Best Renewable Energy Publication, REI Expo",
      },
      {
        when: '2019 – present',
        title: 'Director, Incore Business Solutions LLP',
        detail: 'Market research, public relations and social media consultancy.',
      },
    ],
    education: [
      'MA, Political Science — University of Delhi',
      'B.A. (Hons.) — Miranda House',
      'Associate Member, Indian Institute of Public Administration',
    ],
  },
  {
    slug: 'pradip-bagchi',
    name: 'Pradip Bagchi',
    initials: 'PB',
    photo: 'images/team/pradip-bagchi.jpg',
    role: 'Journalist, editor & media educator',
    facts: [
      { value: '36+', label: 'years as a media professional' },
      { value: '1999', label: 'media educator since' },
      { value: '3', label: 'news channel launches' },
    ],
    bio: [
      "Pradip Bagchi has been a media professional for over 36 years. After his last full-time media engagement (till March 2024) as Senior Editor with the Times of India in New Delhi, he joined the National Council of Applied Economic Research (NCAER), India's oldest economic policy think tank, as a part-time Senior Advisor leading the editorial and communication functions.",
      'He has also been a media educator since 1999, serving as a visiting faculty member at premier institutes, including the Indian Institute of Mass Communication (IIMC), Apeejay Institute of Mass Communication, YMCA (New Delhi), TV Today Media Institute and Xavier University and KIIT University in Bhubaneswar among others.',
      'During his long journalistic career, he has worked across various media platforms. Bagchi began his media career with the wire service, United News of India, in 1990. He switched to broadcast media in 2003 as part of the senior editorial team for the launch of Headlines Today (now India Today). He held a senior position at CNN-IBN (now News18) and was also part of the launch team for NewsX as the Deputy Editor in 2008.',
      "As Senior Vice President in Mumbai-based Castle Media, a media consultancy firm, he was part of an international team of consultants to launch Bangladesh's first 24X7 news channel, Somoy, in 2011.",
      "Bagchi has reported on a wide range of subjects, including politics, defence, disasters and cricket. He was part of the War Correspondents' Course, organised by the Ministry of Defence in 1995. He was also on the panel of All India Radio's English newscasters during 1996–2004.",
    ],
    milestones: [
      { when: '1990', title: 'Began career at United News of India', detail: 'Wire service.' },
      {
        when: '1995',
        title: "War Correspondents' Course",
        detail: 'Organised by the Ministry of Defence.',
      },
      { when: '1996–2004', title: "Panel of All India Radio's English newscasters" },
      { when: '1999 – present', title: 'Visiting faculty at IIMC, Apeejay, YMCA, TV Today Media Institute, Xavier & KIIT' },
      { when: '2003', title: 'Launch team, Headlines Today (now India Today)' },
      { title: 'Senior position, CNN-IBN (now News18)' },
      { when: '2008', title: 'Deputy Editor, launch team of NewsX' },
      {
        when: '2011',
        title: 'SVP, Castle Media — launch of Somoy, Bangladesh',
        detail: "Bangladesh's first 24X7 news channel.",
      },
      { when: 'till March 2024', title: 'Senior Editor, Times of India, New Delhi' },
      {
        when: 'Now',
        title: 'Senior Advisor (part-time), NCAER',
        detail: 'Leads editorial and communication functions.',
      },
    ],
    education: [],
  },
  {
    slug: 'abhilasha-daftuar',
    name: 'Abhilasha Daftuar',
    initials: 'AD',
    photo: 'images/team/abhilasha-daftuar.jpg',
    role: 'International Relations graduate, researcher & writer',
    facts: [
      { value: 'IR', label: 'International Relations, minor in History' },
      { value: '5', label: 'research & writing internships' },
      { value: 'IFS', label: 'aspires to join the Indian Foreign Service' },
    ],
    bio: [
      "Abhilasha Daftuar is a graduate of Ashoka University, where she studied International Relations with a minor in History. Her interest in India's foreign relations and its engagement with global powers drives her aspiration to join the Indian Foreign Service.",
      "Alongside her studies, she built wide-ranging research and writing experience through internships. At the Observer Research Foundation, she worked under Professor Harsh V. Pant, writing articles on India–Pakistan relations. With the Government of Haryana's Citizen Resources Information Department, she studied the Parivar Pehchan Patra family data repository, examining its implementation and its privacy and governance implications. At the Rashtrapati Bhavan Museum, she wrote and edited anecdotes about India's Presidents. She has also interned at Ritam Digital Media Foundation and at Invision Communications & Research, where she worked on a study of adolescent girls' menstrual hygiene concerns and on event planning and design.",
      'In her final semester, she was a Teaching Assistant for history courses taught by Professors Mahesh Rangarajan and Seema Alavi. At university, she co-headed the Public Relations department of the student government and the Social Media and Communications department of the Law Society, and mentored first-year students.',
    ],
    milestones: [
      {
        title: 'Observer Research Foundation',
        detail: 'Wrote articles on India–Pakistan relations under Professor Harsh V. Pant.',
      },
      {
        title: 'Citizen Resources Information Department, Govt. of Haryana',
        detail: 'Studied the Parivar Pehchan Patra repository — implementation, privacy and governance.',
      },
      {
        title: 'Rashtrapati Bhavan Museum',
        detail: "Wrote and edited anecdotes about India's Presidents.",
      },
      { title: 'Ritam Digital Media Foundation' },
      {
        title: 'Invision Communications & Research',
        detail: "Study of adolescent girls' menstrual hygiene concerns; event planning and design.",
      },
      {
        title: 'Teaching Assistant, Ashoka University',
        detail: 'History courses by Professors Mahesh Rangarajan and Seema Alavi.',
      },
    ],
    education: [
      'Ashoka University — International Relations, minor in History',
      'Co-head, Public Relations, student government',
      'Co-head, Social Media & Communications, Law Society',
      'Mentor to first-year students',
    ],
  },
];
