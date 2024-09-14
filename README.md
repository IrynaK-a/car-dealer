# Vehicle Filter App

## Overview
This app allows users to filter vehicles by make and year.

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
To start the development server:
```bash
npm run dev
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
