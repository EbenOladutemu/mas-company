<template>
  <div>
    <Hero>
      <h1 slot="page-name">
        Our People
      </h1>
    </Hero>
    <section id="about">
      <div class="container text-start">
        <p>
          At MAS, we believe in our people. A team of experienced people who are committed to providing flexible, tailor made offerings that delight our customers. We keep our staffs motivated, diligent and provide you with excellent customer service at all times. We believe, <strong>Expertise + Action = Results.</strong>
        </p>
        <!-- <p class="mb-0">Our management team has standing and extensive experience in:</p>
        <ul class="ps-2">
          <li>- Business Focus</li>
          <li>- Passion for Delivery</li>
          <li>- Forward Looking</li>
          <li>- Winning</li>
          <li>- Integrity</li>
        </ul> -->
        <h3 class="fw-bold">Management Profile</h3>
        <p>
          The Company has a staff body of over 25 members. Our staff body comprises of Technical staff, Administrative staff and Skilled and unskilled workers. Below are the names of our Management Staff body:
        </p>
        <div class="mas-grid">
          <div class="card" v-for="(team, index) in teams" :key="index">
            <img :src="team.image ? require('./../assets/img/team/' + team.image + '.jpeg') : 'https://via.placeholder.com/750x850'" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">{{ team.name }} - <strong>{{ team.title }}</strong></h5>
              <p class="card-text">
                {{ team.bio }}{{ !team.showRemainder ? ".." : "&nbsp;" + team.bioRemainder }}
              </p>
              <button class="btn btn-primary" @click="team.showRemainder = !team.showRemainder">
                {{ !team.showRemainder ? "Read more" : "Show less" }}
              </button>
            </div>
          </div>
        </div>
      </div>
      
    </section>
    <Contact/>
    <Footer/>
  </div>
</template>

<script>
import Hero from "@/components/Hero";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default {
  name: 'Home',
  components: {
    Hero, Contact, Footer
  },
  data() {
    return {
      teams: [
        { 
          name: "Mamadu Bah",
          title: "MD/CEO",
          bio: "Mr. Mamadu Bah commenced his career at Zain (SL) Limited as an Installer of Zain Internet Modems to Corporate Institutions from (2010-2011) before he became an Area Account Developer at the Sierra Leone Bottling Company Limited.",
          bioRemainder: "He then moved to the Financial Sector as Head of Operational Risk. He is a graduate {B.sc (Hons) in Financial Services} from the Institute of Public Administration and Management University of Sierra Leone. In addition to his qualifications, he has attended several courses/training/seminars such as Anti Money Laundering, Risk Analysis, Recovery Strategies, Leadership Qualities, Entrepreneurship and other Professional and accreditation Programmes.",
          image: "Mamadu-Bah",
          showRemainder: false,
        },
        { 
          name: "Sulaiman Dainkeh",
          title: "Executive Director",
          bio: "Sulaiman Dainkeh is a graduate from the Fourah Bay College – University of Sierra Leone with B.Sc (Hons.) in Accounting and Finance. He commenced his career in Bank PHB Sierra Leone Limited as the Head of Admin & Finance.",
          bioRemainder: "He is currently pursuing his Masters in Finance and Accounting at the Institute of Public Administration and Management. In addition to his qualifications, he has attended several courses/training/seminars such as Performance Management and Comprehensive Banking, Customer Due Diligence, Anti Money Laundering and counter Financing of Terrorism, Credit Risk Analysis, Corporate Governance and Taxation.",
          image: "Sulaiman-Dainkeh",
          showRemainder: false,
        },
        { 
          name: "Rodney Jenner Lewis",
          title: "Project Manager",
          bio: "Rodney Jenner Lewis is a graduate from N’jala University with a Masters in Soil and Water Engineering and a Bachelor of Engineering with Honors (Civil Option) from Fourah Bay College – University of Sierra Leone in 2004.",
          bioRemainder: "He has over 15 years of experience in the field of Construction and Borehole Drilling and has worked in various Districts in Sierra Leone. He commenced his career at Geo Resources, N’golia and Tropical Environment Design Associates. In addition to his qualification, he is a member of the Sierra Leone Institution of Engineers and has attended several courses/training/seminars etc.",
          image: "",
          showRemainder: false,
        },
        { 
          name: "Abdul Rahman Turay",
          title: "Design Team Leader",
          bio: "Abdul is a 2010 graduate from Fourah Bay College – University of Sierra Leone in the department of Geology. He also holds a M.S. Hydrogeology from Clemson University in South Carolina, USA.",
          bioRemainder: "He has over ten (10) years’ experience in Mineral Exploration, Borehole Drilling, the Environment and Mining and have worked in all the 14 Districts in Sierra Leone. He commenced his career London Mining Company PLC & Timis Corporation, Environment Protection Agency SL, AMR Gold-Wilkinson Hills Mining Project (SL) Ltd, BrunnenBau Conrad (SL) Ltd, Team & Team International, CEMMATS Group (SL) Ltd and MAS Company SL Limited. In addition to his qualification, he is a member of the Sierra Leone Institution of Geoscientists (SLIG) and has attended several courses/training/seminars etc.",
          image: "",
          showRemainder: false,
        },
        { 
          name: "Abubakarr Sesay",
          title: "Water Development/Hydrogeologist",
          bio: "Abubakarr is a graduate from Fourah Bay College – University of Sierra Leone with a BSc. in Geology, and a M.Sc from Njala University in Environmental Management & Quality Control. He has over nine (9) years’ experience in Environmental, Water Management and Public awareness campaigns for government institutions, NGOs and INGOs etc.",
          bioRemainder: "He also has experience in Borehole Drilling, the Environment and Mining and have worked in all the 14 Districts in Sierra Leone. He commenced his career as a Technical Advisor for Rural and Private Sector development project (World Bank funded program), Sky Fox (project implemented by Steward (USAID funded project), Brunnenbau Conrad SL Limited and MAS Company SL Limited. In addition to his qualification, he is a member of the Sierra Leone Institution of Geoscientists (SLIG) and has attended several courses/training/seminars etc.",
          image: "",
          showRemainder: false,
        },
        { 
          name: "Zarkpah Newray",
          title: "Chief Civil Engineer",
          bio: "Zarkpah is a 2002 graduate from the Milton Margai College of Education and Technology with a Higher National Diploma in Building Construction and Civil Engineering. He has over 15 years of experience in the field of Construction and Borehole Drilling and has worked in various Districts in Sierra Leone.",
          bioRemainder: "He commenced his career at Sky Construction and Engineering Services as Site Engineer from 2005 – 2009, he later joined City Construction Company as Assistant Quantity Surveyor in Liberia from 2009 to 2012. He also worked for IDEAS Partnership as Project Supervisor from 2012 to 2014 and finally with MAS Company (SL) Limited as Chief Civil Engineer. In addition to his qualification, he has attended several courses/training/seminars such as Project Management the Institute of Business Studies & Administration.",
          image: "Henry-Zarkpah",
          showRemainder: false,
        },
        { 
          name: "Suliaman Koroma",
          title: "Chief Mechanical & Electronic Engineer",
          bio: "Sulaiman Koroma has over 8 years on field experience as an electrician working with the London Mining, Timis Mining Cooperation, Electricity Distribution and Supply Authority (EDSA) in various capacities such as Design and layout cabling system,",
          bioRemainder: "Installation and maintenance of Generator, emergency service on all electrical installation and equipment, Diagnose problem and provide solution for electrical installation and equipment repairs of generators, drilling machines.",
          image: "",
          showRemainder: false,
        },
        { 
          name: "Michael Adou Rahman Turay",
          title: "Head Welder, Fabricator and Boiler Maker",
          bio: "Michael Turay has a professional experience expanding over 34 years in the field of welding and fabrication. He started working at the Sierra Rutile Limited in the 1980s.",
          bioRemainder: "Over the years, he has worked privately, and for various companies such as Matters Construction Company, CAUSE Canada, United Nations Mission in Sierra Leone (UNAMSIL), London Mining / Timis Mining Company etc. He has worked in various capacities such as Designing, creating, repairing, adapting and fabrication of various metal, concrete, pipes, earth moving equipment etc. He has also worked with installation, operation and maintenance of generators, floating plants and faecal sludge treatment plants.",
          image: "",
          showRemainder: false,
        },
        { 
          name: "Samuel Taiwo Macauley",
          title: "Mechanical Engineer",
          bio: "Samuel T. Macauley has over 19 years on field experience as an electrician working with the Sierra Leone Red Cross Society, United Nation Mission in Sierra Leone (UNAMSIL), Zenith bank SL Limited and MAS Company SL Limited in various capacities such as Design and layout cabling system,",
          bioRemainder: "maintenance of Generator, emergency service on all electrical installation and equipment, Diagnose problem and provide solution for electrical installation and equipment repairs of generators, drilling machines.",
          image: "",
          showRemainder: false,
        },
        { 
          name: "Dolcie Millicent Hamilton",
          title: "Stakeholder Specialist",
          bio: "Dolcie Hamilton is a 2008 graduate from the Institute of Public Administration and Management with B.sc Hons in Financial Services, and MSc. in Business Administration. She worked in the banking industry for over 10 years, and commenced her career with Standard Chartered Bank SL in 2006.",
          bioRemainder: "She is presently Head of Administration and Stakeholder Manger of the company, and in addition to her qualifications, she has attended several courses/training/seminars etc.",
          image: "Dolcie-Hamilton",
          showRemainder: false,
        }
      ]
    }
  },
  created() {
    document.title = "Team | MAS Company SL Ltd.";
  },
}
</script>

<style scoped>
#hero {
  background-image: url("./../assets/img/hero/team-hero.jpg");
}
</style>
