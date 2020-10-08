import React from 'react';

import Layout from '../../components/layout';
import SEO from '../../components/seo';
import ContentPageTemplate from '../../templates/content';

const PoliciesPage = ({ location }) => {
  return (
    <Layout location={location}>
      <SEO title="Policies and Pricing" />
      <ContentPageTemplate
        title="Policies and Pricing"
        section="puppies"
        content="<ul><li>Breeder reserves the right to substitute a stud for any reason.</li><li>Breeder reserves the right to select any puppy from any litter as a potential breeding dog.  </li><p>Dolore quisquam doloremque ea. Beatae voluptatem quis labore rerum dolores voluptatem et sint. Quis dolor ut eligendi sunt et asperiores vero ipsam. Qui sed veniam est dolor. Odit quisquam qui quis dolor quasi quaerat sunt laudantium. Facere asperiores expedita et maiores dolorem ut labore.</p><p>Minus occaecati vitae sunt. Dolor nihil fuga ut eaque repellendus accusamus. Ut earum et officiis ipsam id quam et. Rerum illo nemo cumque repellat. Ut autem commodi rerum ut aperiam exercitationem. Quasi quia odit exercitationem.</p><p>Officia eveniet doloremque dolor quos. Iure non vel vero eveniet commodi. Consequuntur aspernatur et eos magnam perferendis. Et voluptas fugiat veniam harum vitae. Explicabo nulla atque cum vitae qui illo. Ea sapiente aliquid voluptatum eum beatae a libero.</p><p>Temporibus iusto ut dignissimos et distinctio voluptatum molestiae atque. Minima quasi recusandae tempore. Ut rem ex ipsam deserunt et consequatur. Sequi sit nihil eligendi non ad. Sit nesciunt et vero itaque est architecto voluptas. Qui molestiae ex ut.</p>"
      />
    </Layout>
  );
};

export default PoliciesPage;
