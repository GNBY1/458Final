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
    title: 'Living in Seattle',
    subtitle: 'Seattle is a beautiful place, earthquakes are rare, vegetation is lush.',
    byline: 'By Jimmy Yang',
    footer: 'Source: source citations, etc. <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        {
            id: 'slug-style-id',
            alignment: 'left',
            hidden: false,
            title: 'Global Earthquake',
            image: 'image/Earthquake.jpg',
            description: 'Earthquake usually come with a large environmental damage, specifically for the plants, plants in web area to be exact. It can be predicted that in humid areas, if earthquakes occur frequently, plants will be severely affected, otherwise there will be no impact.',
            location: {
                center: [-95.712891, 37.09024],
                zoom: 1,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // add the following:
                {
                    layer: 'earthquakes-layer',
                    opacity: 1,
                 duration: 5000
                     }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'second-identifier',
            alignment: 'right',
            hidden: false,
            title: 'Trees in Seattle',
            image: 'image/Trees.jpg',
            description: 'Each dot repersents the tree location in Seattle, as well as their radius in size, the darker point stand for larger tree radius. As we can see, Seattle does not have a major earthquake record and does not have any impact on their plant health',
            location: {
                center: [-122.33207, 47.60621],
                zoom: 11,
                pitch: 0,
                bearing: 0,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'SeattleTreeCrowns',
                    opacity: 1,
                    duration: 10
                },

                {
                    layer: 'earthquakes-layer',
                    opacity: 1,
                 duration: 5000
                     },

                {
                    layer: 'MHA-layer',
                    opacity: 0
                }
            ],
            onChapterExit: []
        },
        {
            id: 'third-identifier',
            alignment: 'left',
            hidden: false,
            title: 'MHA in Seattle',
            image: 'image/House.jpg',
            description: 'This makes Seattle a great place to live, but with it comes an increase in housing costs. To this end, Seattle has many MHAs to ensure that residents have access to affordable housing.',
            location: {
                center: [-122.33207, 47.60621],
                zoom: 11,
                pitch: 0,
                bearing: 0,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'SeattleTreeCrowns',
                    opacity: 0,
                    duration: 10
                },

                {
                    layer: 'earthquakes-layer',
                    opacity: 1,
                 duration: 5000
                     },

                {
                    layer: 'MHA-layer',
                    opacity: 0.5
                }
            ],
            onChapterExit: []
        },
        {
            id: 'fourth-chapter',
            alignment: 'fully',
            hidden: false,
            title: 'Trees and MHA in Seattle',
            image: 'image/TreeInStreet.png',
            description: 'We can see that non-MHA areas tend to have denser trees than MHA areas.',
            location: {
                center: [-122.33207, 47.60621],
                zoom: 11,
                pitch: 0,
                bearing: 0,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'SeattleTreeCrowns',
                    opacity: 1,
                    duration: 10
                },

                {
                    layer: 'earthquakes-layer',
                    opacity: 1,
                 duration: 5000
                     },

                {
                    layer: 'MHA-layer',
                    opacity: 0.5
                }
            ],
            onChapterExit: []
        }
    ]
};
