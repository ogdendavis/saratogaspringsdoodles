import React from 'react';

import Layout from '../../components/layout';
import SEO from '../../components/seo';
import CarePageTemplate from '../../templates/care';

const NutritionPage = ({ location }) => {
  const cards = [
    {
      title: 'Puppy Pack',
      copy: `All of my recommended products for families taking home a new puppy.`,
      image:
        'https://static.wixstatic.com/media/285db2_6d8cd249ee384be18920c656fd9a92b2~mv2.png/v1/fill/w_365,h_450,al_c,q_85/8793_SmBreed_Puppy_Starter_Kit_b.webp',
      to:
        'https://pawtree.com/andreasaunders/myrecommendation/Saratoga-Springs-Doodles',
      button: 'Get the set',
    },
    {
      title: 'Delicious Kibble',
      copy: `I strongly recommend keeping your puppy on pawTree food. This is the kibble that the puppies eat while they're with me.`,
      image:
        'https://pawtree.com/shopping/productimages/2002%20GF_Chicken_SweetPotato%20large.png',
      to: 'https://pawtree.com/andreasaunders/product/GM2002',
    },
    {
      title: 'Mix it up',
      copy: `You don't like to eat the same thing every day, and neither does your dog. Reduce mealtime boredom and add valuable nutrition with these seasonings!`,
      image:
        'https://pawtree.com/shopping/productimages/8793_TopChefStatus%20small.png',
      to: 'https://pawtree.com/andreasaunders/product/SS0002',
    },
    {
      title: 'Shop the Store',
      copy: `PawTree offers an amazing variety of food, treats, and toys. Check out the store to see what they have to offer!`,
      image:
        'https://static.wixstatic.com/media/285db2_ad0e6c1715844f01970f043859866f37~mv2.png/v1/fill/w_460,h_460,al_c,q_85,usm_0.66_1.00_0.01/3FOR30.webp',
      button: 'Shop Now',
    },
  ];

  return (
    <Layout location={location}>
      <SEO title="Nutrition" />
      <CarePageTemplate
        title="Nutrition"
        intro={`<p>Nutrition is very important to make sure a dog lives the longest, healthiest life possible. I use and strongly recommend <a href="https://www.pawtree.com/andreasaunders" target="_blank" rel="noopener noreferrer">pawTree</a> products. (Use code Intro4u to save 20% off your first order)</p><p>Your dog's food shouldn't just help them survive -- it should help them thrive! Dogs need quality nutrition to be at their best. We recommend foods that have real meat as the first ingredient; are responsibly sourced; and <b>don't</b> contain meat by-products, artificial colors or preservatives, added sugar or other sweeteners, corn, wheat, or soy.</p><p>Similarly, treats should be made from real meat or offal (animal organs), and shouldn't contain preservatives or artificial flavors.</p><p>Take a look at some of my recommended products below, or shop <a href="https://www.pawtree.com/andreasaunders" target="_blank" rel="noopener noreferrer">my store</a> to see all that pawTree has to offer.`}
        cards={cards}
      />
    </Layout>
  );
};

export default NutritionPage;
