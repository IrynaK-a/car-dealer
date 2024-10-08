# Vehicle Filter App

## Overview
This app allows users to filter vehicles by make and year.

## Features

1. Vehicle Make and Model Year Filtering: 
    - users can select a vehicle make from a dropdown list and choose a model year between 2015 and the current year from another dropdown.
2. Result Page:
    - when a user selects a make and model year, the app navigates to a results page where the filtered vehicle models are displayed

## Installation
1. Clone the repository:
    ```bash
    git clone https://github.com/IrynaK-a/car-dealer.git
    ```
2. Install dependencies:
    ```bash
    npm install
    ```
3. Create a `.env.local` file with the contents from a `.env.example` file

## Running the App
### Development Mode
- start the development server:
```bash
npm run dev
```

### Production Mode
- build the application:
```bash
npm run build
```

- start the production server:
```bash
npm start
```

## App tree
```bash
├── src
│   ├── app
│   │   ├── error.tsx
│   │   ├── fonts
│   │   │   ├── GeistMonoVF.woff
│   │   │   └── GeistVF.woff
│   │   ├── globals.css
│   │   ├── icon.svg
│   │   ├── layout.tsx
│   │   ├── not-found.tsx
│   │   ├── page.tsx
│   │   └── result
│   │       └── [makeId]
│   │           └── [year]
│   │               ├── error.tsx
│   │               └── page.tsx
│   ├── components
│   │   ├── ErrorPage
│   │   │   ├── ErrorPage.module.scss
│   │   │   ├── ErrorPage.tsx
│   │   │   └── index.tsx
│   │   ├── Filters
│   │   │   ├── Filters.tsx
│   │   │   └── index.tsx
│   │   └── index.ts
│   ├── libs
│   │   └── utils
│   │       ├── createOptions.ts
│   │       ├── getSelectedMakeId.ts
│   │       ├── getVehicleMakesInfo.ts
│   │       ├── getYearsFrom2015ToCurrent.ts
│   │       ├── index.ts
│   │       └── sortItems.ts
│   └── shared
│       ├── interfaces
│       │   ├── index.ts
│       │   ├── selectOption.interface.ts
│       │   ├── vehicleModelInfo.interface.ts
│       │   ├── vehicleModel.interface.ts
│       │   ├── vehicleTypeInfo.interface.ts
│       │   └── vehicleTypeInfoResult.interface.ts
│       └── types
│           ├── index.ts
│           └── vehicleMakesInfo.type.ts
```
