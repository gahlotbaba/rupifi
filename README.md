# rupifi

-   This app has been developed using NextJS. URL: https://nextjs.org/
-   One of the great boilerplate and netflix and other famous brands are using it.
-   App is SSR enabled. SEO's top priority so google can index are pages
-   APP is using React, Redux, Redux Saga, State Management using Redux, Persist data
-   App routes
    -   (Home Page)
        -   showing the list of customers
        -   layout is responsive and used latest tech (CSS3)
    -   customer/[id]
        -   customer name and address details
        -   Address is an object, formatted the object so iteration can happen using latest techs / ES6/7/8/9 features
        -   Direct accessing page is also working, smartly implementing the logic.
            a/ If a user visits the detail page from the home page. No additional call for customer details
            b/ If user directly visits, fetching customer details data only instead of all the customers list.
-   app's dev mode is enabled by HMR. Quick updates without page refresh.
-   Optimized bundle
-   App support preloading / pre-fetching features for great performance
-   Many more features has been added for great experience

NOTE: -

Improvements

-   Actions / Reducers / Saga further decoupled as per modules / pages / features, so we have a good modular approach
-   Actions types and actions created can be separated
-   API's separate setup for get/post - It will help devs to use common utilities from single module
-   Config setup would be great for APIs end-points / some secrets keys and other config related data
-   Dynamic loading / bundle split can be addressed for larger application
-   performance testing log1
