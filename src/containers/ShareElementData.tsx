import faker from 'faker'

faker.seed(1)

const data = [
    {image: require('../assets/images/shareElement.jpg')},
    {image: require('../assets/images/shareElement.jpg')},
    {image: require('../assets/images/shareElement.jpg')},
    {image: require('../assets/images/shareElement.jpg')},
    {image: require('../assets/images/shareElement.jpg')},
    {image: require('../assets/images/shareElement.jpg')},
    {image: require('../assets/images/shareElement.jpg')},
]

export default data.map(({image}, index) => ({
    key: faker.random.uuid(),
    color: faker.commerce.color(),
    name: faker.name.findName(),
    jobsTitle: faker.name.jobTitle(),
    categories: [...Array(3).keys()].map(() => ({
        key: faker.random.uuid(),
        title: faker.name.jobType(),
        subcats: [...Array(3).keys()].map(faker.name.jobType)
    }))
}))