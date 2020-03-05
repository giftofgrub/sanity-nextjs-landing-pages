export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e604642e7136a2e0984da34',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-xhmismwr',
                  apiId: 'd8c84a5c-4078-4d7b-8945-6874ca0e5441'
                },
                {
                  buildHookId: '5e60464208ca2228d753c7d8',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-4pvccd15',
                  apiId: '1bb14687-8235-4564-9a6f-3bc79324c824'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/giftofgrub/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-4pvccd15.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
