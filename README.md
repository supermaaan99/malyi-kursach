# This is a brief overview of the react project.

# Development:

Best practices for architecture:

1. Create components in ./modules folder
2. tsconfig will automatically add an allias for created component
3. Component`s architecture should contain:

   1. component.tsx, component.scss (o), component.props.ts (o), component.hook.ts (o), index.ts.
   2. If there is a need for a store - store folder: actions.ts, reducer.ts, saga.ts, state.ts, index.ts. (o)
   3. If there are reusable models/enums/validationSchemas/etc... - models folder index.ts (for exporting).
   4. If there are reusable components - components folder with index.ts (for exporting).
      Note: (o) - optional

4. Namings and naming cases:

   1. UpperCase: Classes, Components, Types, Decorators
   2. LowerCase: everything else, using camelCase.

To start the project:

1. Git clone / download the project
2. npm install
3. npm run start

# Production

To build the project:

1. Git clone / download the project
2. npm install
3. npm run build:{env}
   Note: {env} could be on of: local / dev / uat / prod.
