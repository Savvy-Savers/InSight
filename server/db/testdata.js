const { Course } = require('./index.js');


const enterFakeData = () => {

  Course.create({
    idParent: null,
    topic: 'Budgeting 101',
    description: 'This is a great course on budgeting',
    idBadge: 1,
  });

  Course.create({
    idParent: 1,
    topic: 'Budgeting 102',
    description: 'This is a continuing course on budgeting',
    idBadge: 2,
  });

  Course.create({
    idParent: 1,
    topic: 'Budgeting 103',
    description: 'This is a continuing course on budgeting',
    idBadge: 3,
  });

  Course.create({
    idParent: 1,
    topic: 'Budgeting 102',
    description: 'This is a continuing course on budgeting',
    idBadge: 2,
  });


    Pothole.create({
        zip: 70119,
        median_income: 33056,
        longitude: -90.099642,
        latitude: 29.970321,
        severity: 3,
        title: 'Bikes worst enemy',
        description: 'BIIGGG',
        fill_cost: 600,
        money_donated: 200,
        filled: false,
        image: 'https://res.cloudinary.com/adopt-a-pothole/image/upload/v1573148526/jhn3rpqdx3dgva0fbuum.jpg',
    });

    Pothole.create({
        zip: 70112,
        median_income: 30270,
        longitude: -90.080922,
        latitude: 29.959415,
        severity: 1,
        title: 'Not much happening',
        description: 'small',
        fill_cost: 100,
        money_donated: 60,
        filled: false,
        image: 'https://res.cloudinary.com/adopt-a-pothole/image/upload/v1572992370/pko97kuqohnya41ybhgg.jpg',
    });
    Pothole.create({
        zip: 70115,
        median_income: 26000,
        longitude: -90.080922,
        latitude: 29.959415,
        severity: 3,
        title: 'S. O. S.',
        description: 'Save our Souls!',
        fill_cost: 100,
        money_donated: 80,
        filled: false,
        image: 'https://res.cloudinary.com/adopt-a-pothole/image/upload/v1572992370/pko97kuqohnya41ybhgg.jpg',
    });
    Comment.create({
        pothole_id: 1,
        user_id: 1,
        user_name: 'Abel Terefe',
        message: "Wow this the biggest hole I've seen"
    });
    Comment.create({
        pothole_id: 2,
        user_id: 2,
        user_name: 'Amber Jones',
        message: 'HOLY MOLY NOW THATS WHAT I CALL A HOLE',
    });
    Comment.create({
        pothole_id: 2,
        user_id: 2,
        user_name: 'Amber Jones',
        message: 'YO, who made this HOLE???',
    });
    Comment.create({
        pothole_id: 3,
        user_id: 3,
        user_name: 'Eliott Frilet',
        message: 'WHO MADE THIS POTHOLE SHIA LABEOUF',
    });

    Donation.create({
        amount: 80.00,
        email: 'eliottFrilet@yahoo.com',
        pothole_id: 2,
    });

    Donation.create({
        amount: 120.00,
        email: 'amberJones@gmail.com',
        pothole_id: 2,
    });

    Donation.create({
        amount: 60.00,
        email: 'amberJones@gmail.com',
        pothole_id: 3,
    });

    Donation.create({
        amount: 30.00,
        email: 'abelterefe98@hotmail.com',
        pothole_id: 1,
    });

    Donation.create({
        amount: 20.00,
        email: 'eliottFrilet@yahoo.com',
        pothole_id: 1,
    });
};

module.exports = { enterFakeData };
