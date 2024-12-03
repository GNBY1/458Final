var config = {
    style: 'mapbox://styles/mapbox/streets-v12',
    accessToken: 'pk.eyJ1Ijoiank5MzEiLCJhIjoiY20xamt5dDhyMDJuMTJxb2VocjVlaGF1YSJ9.XGC1pAn3ZZV0pwNKAU6JLg',
    showMarkers: false,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: false,
    theme: 'dark',
    use3dTerrain: false, //set true for enabling 3D maps.
    auto: false,
    title: 'We Need More Support For Mental Health Adults',
    subtitle: 'Mental Health Matters, And people do need more supports! No matter Adult or Teenager!',
    byline: 'By Jimmy Yang, Vincent Li',
    footer: 'Source: source citations, etc. <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        {
            id: 'first-identifier',
            alignment: 'left',
            hidden: false,
            title: 'Adult Mental Health Issue Population in Seattle',
            image: 'image/adult_mental_health.jpg',
            description: 'According to National Alliance report, 1 in 20 U.S. adults experience serious mental illness each year, and more than half of people with a mental health condition did not receive any treatment in the past year. In this map, each polygon demonstrates adult mental health issue percentages.',
            legend: true,
            location: {
                center: [-122.3032001, 47.655548],
                zoom: 10,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // add the following:
                {
                    layer: 'pop-pov-layer',
                    opacity: 0,
                    duration: 0
                },

                {
                    layer: 'hospital-layer',
                    opacity: 0,
                    duration: 0
                },

                {
                    layer: 'suicide-layer',
                    opacity: 0,
                    duration: 0
                },

                {
                    layer: 'mental-health-layer',
                    opacity: 1,
                    duration: 0
                }
            ],
            onChapterExit: [
                
            ]
        },
        {
            id: 'second-identifier',
            alignment: 'left',
            hidden: false,
            title: 'Percentage of People Under Poverty Line',
            image: 'image/Poor.jpg',
            description: 'In relating to the causes of mental health, poverty is mostly likely an explanatory variable that impacts the rate of adult mental health. And in response of that, the comparison between mental health percentage and poverty percentage seems to indicate the correlation between them.',
            location: {
                center: [-122.3032001, 47.655548],
                zoom: 10,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'mental-health-layer',
                    opacity: 0,
                    duration: 0
                },
                {
                    layer: 'pop-pov-layer',
                    opacity: 1,
                 duration: 0
                     },
            ],
            onChapterExit: [

            ]
        },
        {
            id: 'third-identifier',
            alignment: 'left',
            hidden: false,
            title: 'Area Around UW, Mental Health Issue percentage is the Highest',
            image: 'image/UDistrict.png',
            description: 'Among the whole Seattle, area near UW has an outstanding high percentage of mental health issue adults, which is 23.3%. About 1 in the 5 people around us reports a bad mental health state.',
            location: {
                center: [-122.3032001, 47.655548],
                zoom: 13,
                pitch: 50,
                bearing: 0,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'pop-pov-layer',
                    opacity: 0,
                    duration: 0
                },
                {
                    layer: 'hospital-layer',
                    opacity: 0,
                    duration: 0
                },
                {
                    layer: 'suicide-layer',
                    opacity: 0,
                    duration: 0
                },
                {
                    layer: 'mental-health-layer',
                    opacity: 1,
                    duration: 0
                }
            ],
            onChapterExit: [

            ]
        },
        {
            id: 'fourth-chapter',
            alignment: 'left',
            hidden: false,
            title: 'Poverty Level is Also Relatively High near UW',
            image: 'image/Homeless.png',
            description: 'Areas near the University of washington has a poverty percentage of 55.77%. At the same time it is also the highest mental health percentage area.',
            location: {
                center: [-122.3032001, 47.655548],
                zoom: 13,
                pitch: 50,
                bearing: 0,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'mental-health-layer',
                    opacity: 0,
                    duration: 0
                },

                {
                    layer: 'suicide-layer',
                    opacity: 0,
                    duration: 0
                },

                {
                    layer: 'pop-pov-layer',
                    opacity: 1,
                    duration: 10
                }
            ],
            onChapterExit: []
        },

        {
            id: 'fifth-chapter',
            alignment: 'left',
            hidden: false,
            title: 'Suicide Population In Seattle',
            image: 'image/Sad.jpg',
            description: 'As the worst consequence of serious mental health state, Suicide rate is also outstandly high in north seattle. A total of 55 suicide deaths reported in North Seattle in 2023, and 9 suicides near Univerisity of Washington.',
            location: {
                center: [-122.3032001, 47.655548],
                zoom: 10,
                pitch: 0,
                bearing: 0,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'pop-pov-layer',
                    opacity: 0,
                    duration: 10
                },

                {
                    layer: 'mental-health-layer',
                    opacity: 1,
                    duration: 0
                },

                {
                    layer: 'suicide-layer',
                    opacity: 1,
                    duration: 0
                },

                {
                    layer: 'hospital-layer',
                    opacity: 0,
                    duration: 0
                }

            ],
            onChapterExit: []
        },

        {
            id: 'sixth-chapter',
            alignment: 'left',
            hidden: false,
            title: 'Hopital Accessbilities In Seattle',
            image: 'image/hospital.png',
            description: 'On the map, each yellow dots represent each available hospital services. In reponse to resolve the high mental health issues population, we need more health services where people can obtain more help. We need to pay more attention to this serious issue and apply the resources to places that need them the most.',
            location: {
                center: [-122.3032001, 47.655548],
                zoom: 10,
                pitch: 0,
                bearing: 0,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'suicide-layer',
                    opacity: 0,
                    duration: 0
                },
                {
                    layer: 'hospital-layer',
                    opacity: 1,
                    duration: 0
                }
            ],
            onChapterExit: []
        }
    ]
};
