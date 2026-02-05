import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    {
      type: 'category',
      label: 'CSAPP',
      items: [
        'csapp/index',
        {
          type: 'category',
          label: 'Labs',
          items: [
            'csapp/labs/data-lab',
            'csapp/labs/bomb-lab',
            'csapp/labs/cache-lab',
            'csapp/labs/malloc-lab',
            'csapp/labs/shell-lab',
            'csapp/labs/proxy-lab',
          ],
        },
        // {
        //   type: 'category',
        //   label: 'Concepts',
        //   // items: [
        //   //   'csapp/concepts/memory',
        //   //   'csapp/concepts/cache',
        //   //   'csapp/concepts/virtual-memory',
        //   //   'csapp/concepts/linking',
        //   // ],
        // },
      ],
    },
    // 'ostep/index',
    // 'systems/index',
  ],
};

export default sidebars;
