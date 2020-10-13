import React from 'react';

import Layout from '../../components/layout';
import SEO from '../../components/seo';
import CarePageTemplate from '../../templates/care';

const EnrichmentPage = ({ location }) => {
  const cards = [
    {
      title: 'Benebone Wishbone',
      copy: `A great treat for tough chewers, it has long-lasting flavor and the shape makes it easy for dogs to pick up and chew.`,
      image:
        'https://images-na.ssl-images-amazon.com/images/I/81BBbUL9dHL._AC_SL1500_.jpg',
      to:
        'https://www.amazon.com/Benebone-Wishbone-Durable-Aggressive-Chewers/dp/B00MHZTKXY/ref=sr_1_1_sspa?crid=2TNBZG1Y2F5GO&dchild=1&keywords=benebone&qid=1597761087&s=pet-supplies&sprefix=bene%2Cpets%2C870&sr=1-1-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUExUjBNTDc5WlZGNkVXJmVuY3J5cHRlZElkPUEwMzY0NDA2MzAxNVdaOUYxU0syOCZlbmNyeXB0ZWRBZElkPUEwNjQxNjcwMjFFTU5JMU03SDFKMCZ3aWRnZXROYW1lPXNwX2F0ZiZhY3Rpb249Y2xpY2tSZWRpcmVjdCZkb05vdExvZ0NsaWNrPXRydWU=',
      button: 'Buy on Amazon',
    },
    {
      title: 'Kong Chew Toy',
      copy: `The Kong is a classic for a reason. Give your dog something productive to do (instead of chewing on things you don't want them to) -- I fill the Kong with squeeze cheese and freeze it, so it becomes a long-lasting and fun distraction for my pups.`,
      image:
        'https://images-na.ssl-images-amazon.com/images/I/719dcnCnHfL._AC_SL1500_.jpg',
      to:
        'https://www.amazon.com/KONG-Classic-Durable-Natural-Rubber/dp/B0002AR0I8/ref=sr_1_2?dchild=1&keywords=kong&qid=1597761244&s=pet-supplies&sr=1-2',
      button: 'Buy on Amazon',
    },
    {
      title: 'Bully Sticks',
      copy: `Bully sticks are another great, natural, long-lasting chew for your puppy. They make a great treat for crate time!`,
      image:
        'https://images-na.ssl-images-amazon.com/images/I/71lQCPHTLeL._AC_SL1500_.jpg',
      to:
        'https://www.amazon.com/Best-Bully-Sticks-Odor-Free-6-inch/dp/B018WBALD4/ref=sr_1_8?dchild=1&keywords=bully+sticks&qid=1597761684&s=pet-supplies&sr=1-8',
      button: 'Buy on Amazon',
    },
    {
      title: 'Home Grooming Set',
      copy: `Doodles need regular grooming to be their healthiest and happiest. Grooming time can also be great bonding time, especially if you start early and make it a positive experince for your pup.`,
      image:
        'https://images-na.ssl-images-amazon.com/images/I/71pGTyP%2BKpL._AC_SL1287_.jpg',
      to:
        'https://www.amazon.com/Ruff-Ruffus-Self-Cleaning-Clippers-Grooming/dp/B07R8WPLC5/ref=sr_1_20?crid=3J3G18V96TBTT&dchild=1&keywords=dog+nail+clippers&qid=1597760815&s=pet-supplies&sprefix=dog+%2Cpets%2C489&sr=1-20',
      button: 'Buy on Amazon',
    },
    {
      title: 'Comfy Crate',
      copy: `Dogs are den animals, and while a wire crate might not look very inviting to you or me, the small, enclosed space is homey and comforting to your dog.`,
      image:
        'https://images-na.ssl-images-amazon.com/images/I/91qtQrrA28L._AC_SL1500_.jpg',
      to:
        'https://www.amazon.com/AmazonBasics-Single-Door-Folding-Metal-Crate/dp/B00QAVO29I/ref=sxts_sxwds-bia-wc-p13n2_0?cv_ct_cx=dog+crate&dchild=1&keywords=dog+crate&pd_rd_i=B00QAVO29I&pd_rd_r=113a5c33-f6ec-4ce2-aedc-df25c169efba&pd_rd_w=voMH3&pd_rd_wg=nTcfE&pf_rd_p=13bf9bc7-d68d-44c3-9d2e-647020f56802&pf_rd_r=16WQP4J1CZ27EJT6631G&psc=1&qid=1597760475&sr=1-2-791c2399-d602-4248-afbb-8a79de2d236f',
      button: 'Buy on Amazon',
    },
    {
      title: 'Calming Dog Bed',
      copy: `In addition to stimulation, dogs need a place to feel safe and relaxed. This bed is great for helping your pooch chill out after a training session or a long walk.`,
      image:
        'https://images-na.ssl-images-amazon.com/images/I/81IIrtSFi%2BL._AC_SL1500_.jpg',
      to:
        'http://amazon.com/Best-Friends-Sheri-Calming-Cuddler/dp/B01MV0IX66/ref=sr_1_6?dchild=1&keywords=dog+bed&qid=1597761395&s=pet-supplies&sr=1-6',
      button: 'Buy on Amazon',
    },
  ];

  return (
    <Layout location={location}>
      <SEO title="Enrichment" />
      <CarePageTemplate
        title="Enrichment"
        intro={`<p>Most behavioral problems with puppies boil down to a lack of <a href="/care-and-feeding/training">training</a>, or boredom. Dogs, like people, need mental and physical exercise in order to be their best.</p><p>Dogs interact with the world via their mouths, so chew toys are a great way to give them something to do -- and something to eat other than your slippers. Puzzles and snuffle mats are also great ways to keep your dog mentally engaged.</p><p>Of course, your puppy is happiest when you're interacting with them. Training time is good bonding, but it's also nice to have some more relaxed, less structured, play time with your pup. Interactive toys such as ropes (for tug of war) and balls (for fetch) are wonderful tools to help you engage with your dog. Additionally, a regular grooming routine is a great way to not only keep your pup clean, but build a bond with them.</p><p>Dogs need more sleep than people do -- generally around 12 hours a day. So it's important that your dog has comfortable, safe places to nap throughout the day. This gives your dog a feeling of security, and lets them rest up so they can be their best once nap time is over.</p><p>Check out some of my recommended products for keeping your pet engaged and happy below.</p>`}
        cards={cards}
      />
    </Layout>
  );
};

export default EnrichmentPage;
