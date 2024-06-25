import React from 'react'

function AboutPage() {

  return (
    <section className='aboutpage mx-auto max-w-7xl px-2 md:px-0 flex flex-col gap-3 md:flex-row min-h-screen mt-28'>
      <div className="aboutpage__contactus w-full md:w-1/3">
        <p className="contactus__heading">CONTACT US</p>
      </div>
      <div className="aboutpage__content w-full md:w-2/3 flex flex-col gap-3">
        <AboutPageContentItem />
        <AboutPageContentItem />
        <AboutPageContentItem />
        <AboutPageContentItem />
        <AboutPageContentItem />
      </div>
    </section>
  )
}

const AboutPageContentItem = () => {
  return (
    <div className="content__1">
      <p className="contactus__heading">PRIVACY POLICY</p>
      <p className="contactus__subheading">Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis ipsa alias quisquam aliquid aut recusandae aspernatur rerum! Eos facere ipsa qui magnam sunt fuga molestiae, assumenda consequatur! Pariatur numquam eveniet porro iste! Accusantium sit doloremque perferendis et aperiam est ullam ab quo nostrum quam voluptate odit quis voluptates, maiores omnis fugiat corrupti repellendus nesciunt hic a id sapiente nam. Accusamus porro atque dolores quod quasi quia voluptatum sint totam voluptas distinctio tenetur, sunt delectus dignissimos corrupti, quos fugit ipsa adipisci reprehenderit quae ipsam maiores necessitatibus quas molestiae voluptatem. Temporibus eaque dolores eveniet nobis mollitia eligendi, dolor obcaecati recusandae ad odio doloribus cumque dolorum tempora voluptatibus fugit cum voluptate eos doloremque molestias laborum? Assumenda voluptatum repudiandae, illum, doloribus eos repellat ipsa ea quidem quos quae inventore minima consequuntur aliquid. Beatae, totam molestiae, quod sequi ratione odit minima ipsa non iure officiis, eaque cum deleniti nostrum perspiciatis et est reprehenderit perferendis.</p>
    </div>
  )
}

export default AboutPage;
