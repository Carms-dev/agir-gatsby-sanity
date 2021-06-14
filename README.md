# AGIR Montreal Website Revamp Project 🌈

[Old Site](https://www.agirmontreal.org/)

[Staging](https://agirmontreal.netlify.app/)

[Wireframe (Figma)](https://www.figma.com/file/e7Vr5LWLSoqP7bGL75URrp/Mobile-Prototype_V2?node-id=141%3A488)

## Stack
* GatsbyJS
* [Sanity](https://www.sanity.io/)
* Netlify

    .
    ├── ssg <-- Gatsby Static Site Generator
    ├── studio <-- Sanity CMS
    └── README.md

## Set up Sanity Studio

1. Install Sanity CLI tooling: [quick start](https://www.sanity.io/docs/getting-started-with-sanity-cli)

```
npm install -g @sanity/cli

```

2. Invite Collaberator

```
sanity users invite ${email}
```

3. Create `.env` file in `/studio`, add token

```
SANITY_TOKEN=${secret}
```

4. Deploy

```
npm start

```

5. Everytime you change the schema, run

```
sanity graphql deploy
```
[Schema Type Reference](https://www.sanity.io/docs/schema-types)

## Attribution
* Web Design
* Illustrations
