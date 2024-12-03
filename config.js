var config = {
    style: 'mapbox://styles/mapbox/streets-v12',
    accessToken: 'pk.eyJ1Ijoiank5MzEiLCJhIjoiY20xamt5dDhyMDJuMTJxb2VocjVlaGF1YSJ9.XGC1pAn3ZZV0pwNKAU6JLg',
    showMarkers: true,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: true,
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
            description: 'According to National Alliance report, 1 in 20 U.S. adults experience serious mental illness each year, and more than half of people with a mental health condition did not receive any treatment in the past year.',
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
            alignment: 'right',
            hidden: false,
            title: 'Percentage of people under 200% poverty line',
            image: 'image/Trees.jpg',
            description: 'Each dot repersents the tree location in Seattle, as well as their radius in size, the darker point stand for larger tree radius. As we can see, Seattle does not have a major earthquake record and does not have any impact on their plant health',
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
            title: 'Area around UW, mental health percentage is the highest in Seattle',
            image: 'image/House.jpg',
            description: 'This makes Seattle a great place to live, but with it comes an increase in housing costs. To this end, Seattle has many MHAs to ensure that residents have access to affordable housing.',
            location: {
                center: [-122.3032001, 47.655548],
                zoom: 13,
                pitch: 50,
                bearing: 0,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
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
            alignment: 'right',
            hidden: false,
            title: 'We see the same pattern for mental health',
            image: 'image/TreeInStreet.png',
            description: 'We can see that non-MHA areas tend to have denser trees than MHA areas.',
            location: {
                center: [-122.3032001, 47.655548],
                zoom: 13,
                pitch: 50,
                bearing: 0,
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
            title: 'We see the same pattern for mental health',
            image: 'image/TreeInStreet.png',
            description: 'We can see that non-MHA areas tend to have denser trees than MHA areas.',
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
            alignment: 'right',
            hidden: false,
            title: 'We see the same pattern for mental health',
            image: 'image/TreeInStreet.png',
            description: 'We can see that non-MHA areas tend to have denser trees than MHA areas.',
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
