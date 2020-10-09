import React from 'react';

import Layout from '../../components/layout';
import SEO from '../../components/seo';
import ContentPageTemplate from '../../templates/content';

const TrainingPage = ({ location }) => {
  return (
    <Layout location={location}>
      <SEO title="Training" />
      <ContentPageTemplate
        title="Training"
        section="care"
        content={`<p>Training your puppy is also very important: If you are a new puppy owner or would like a refresher course, I have teamed up with <a href="https://www.baxterandbella.com/" target="_blank" rel="noopener noreferrer">Baxter and Bella</a> who have an amazing program (Use code SARATOGA to save 25% off your lifetime membership).</p><p>Dolore quisquam doloremque ea. Beatae voluptatem quis labore rerum dolores voluptatem et sint. Quis dolor ut eligendi sunt et asperiores vero ipsam. Qui sed veniam est dolor. Odit quisquam qui quis dolor quasi quaerat sunt laudantium. Facere asperiores expedita et maiores dolorem ut labore.</p><p>Minus occaecati vitae sunt. Dolor nihil fuga ut eaque repellendus accusamus. Ut earum et officiis ipsam id quam et. Rerum illo nemo cumque repellat. Ut autem commodi rerum ut aperiam exercitationem. Quasi quia odit exercitationem.</p><p>Officia eveniet doloremque dolor quos. Iure non vel vero eveniet commodi. Consequuntur aspernatur et eos magnam perferendis. Et voluptas fugiat veniam harum vitae. Explicabo nulla atque cum vitae qui illo. Ea sapiente aliquid voluptatum eum beatae a libero.</p><p>Temporibus iusto ut dignissimos et distinctio voluptatum molestiae atque. Minima quasi recusandae tempore. Ut rem ex ipsam deserunt et consequatur. Sequi sit nihil eligendi non ad. Sit nesciunt et vero itaque est architecto voluptas. Qui molestiae ex ut.</p>`}
      />
    </Layout>
  );
};

export default TrainingPage;
