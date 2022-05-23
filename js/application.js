let voucherVar = null;
let businessUnit = "cs";
let obwVersion = "defaultEN";
let agbVersion = "3.1";
let directDebit = true;
let locationSite = "4"; // 4 is berlin, 1 is badhonnef
let currentPage = 3;
let completed = true;
//these are for successful on campus payload

//intake variables
let currentProgramme = "";
let ProgrammeIntakes = [];
let allIntakes = [
  "oct21",
  "jan22",
  "apr22",
  "jul22",
  "oct22",
  "apr23",
  "jan23",
  "jul23",
  "oct23",
];
let difference = [];

/*let discMyStu180B = 0.770081;
let discMyStu60M = 0.87243;
let discMyStu90M = 0.843152;
let discMyStu120M = 0.865815;*/

let discMyStu180B = 0.598570747975226;
//let discMyStu60M = 0.708644222020018;
let discMyStu60M = 0.651715481171548;
let discMyStu90M = 0.753095684803002;
let discMyStu120M = 0.665703168426904;

function workExperience() {
  if ($("#Degree").find(":selected").text().startsWith("M")) {
    return true;
  } else {
    return false;
  }
}

let labelContent = "";

const validateEmail = (email) => {
  return email.match(
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
};

function EmptyFields() {
  labelContent = "";
  if (
    $("#Degree").find(":selected").text().startsWith("S") ||
    $("#studyProgram").find(":selected").text().startsWith("S")
  ) {
    labelContent += "~DegreeFieldEmpty~studyProgramFieldEmpty";
  }

  if (
    !mtCheckOnline.includes($("#studyProgram").find(":selected").text()) &&
    $("input[name=intake]:checked").length === 0 &&
    $('input[name="studyLocation"]:checked').val() === "Study on campus"
  ) {
    labelContent += "~startDateIntakeSectionEmpty";
  }
  if (
    !mtCheckOnline.includes($("#studyProgram").find(":selected").text()) &&
    $("input[name=intake]:checked").length > 0 &&
    $("input[name=studyLocation]:checked").length > 0 &&
    $("input[name=site]:checked").length === 0
  ) {
    labelContent += "~locationSectionEmpty";
  }
  if ($("input[name=gender]:checked").length === 0) {
    labelContent += "~GenderSectionEmpty";
  }
  if (document.getElementById("first-name").value == "") {
    labelContent += "~NameFieldInputEmpty";
  }
  if (document.getElementById("last-name").value == "") {
    labelContent += "~SurnameFieldInputEmpty";
  }
  if (document.getElementById("street").value === "") {
    labelContent += "~AddressStreetInputEmpty";
  }
  if (document.getElementById("e-mail").value === "") {
    labelContent += "~EmailInputEmpty";
  }
  if (!validateEmail(document.getElementById("e-mail").value)) {
    labelContent += "~falsyEmail";
  }
  if (document.getElementById("date-of-birth").value === "") {
    labelContent += "~dateOfBirthInputEmpty";
  }
  if (document.getElementById("city").value === "") {
    labelContent += "~AddressCityInputEmpty";
  }

  if ($("input[name=school]:checked").length === 0) {
    labelContent += "~EducationLevelRadioButtonsEmpty";
  }
  if ($("input[name=enlgishlevel]:checked").length === 0) {
    labelContent += "~EnglishLevelInputEmpty";
  }
  if ($("input[name=budget]:checked").length === 0) {
    labelContent += "~BudgetFieldInputEmpty";
  }
  if (
    $("input[name=workexperience]:checked").length === 0 &&
    workExperience()
  ) {
    labelContent += "~workExperienceForMasterEmpty";
  }
  if ($(".study-start").val() === "") {
    labelContent += "~submitWithoutStartDateEmpty";
  }

  labelContent += "~ks-campus";

  return labelContent;
}

function scrollTo() {
  if (
    $("#Degree").find(":selected").text().startsWith("S") ||
    $("#studyProgram").find(":selected").text().startsWith("S")
  ) {
    document
      .getElementById("Degree")
      .scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "nearest",
      });
  } else if (
    !mtCheckOnline.includes($("#studyProgram").find(":selected").text()) &&
    $("input[name=studyLocation]:checked").length === 0
  ) {
    document
      .getElementById("studyProgram")
      .scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "nearest",
      });
  } else if (
    !mtCheckOnline.includes($("#studyProgram").find(":selected").text()) &&
    $("input[name=intake]:checked").length === 0 &&
    $('input[name="studyLocation"]:checked').val() === "Study on campus"
  ) {
    document
      .getElementById("intakes")
      .scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "nearest",
      });
  } else if (
    !mtCheckOnline.includes($("#studyProgram").find(":selected").text()) &&
    $("input[name=intake]:checked").length > 0 &&
    $("input[name=studyLocation]:checked").length > 0 &&
    $("input[name=site]:checked").length === 0
  ) {
    document
      .getElementById("site")
      .scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "nearest",
      });
  } else if ($("input[name=gender]:checked").length === 0) {
    document
      .getElementById("gender")
      .scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "nearest",
      });
  } else if (document.getElementById("first-name").value == "") {
    document
      .getElementById("first-name")
      .scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "nearest",
      });
  } else if (document.getElementById("last-name").value == "") {
    document
      .getElementById("last-name")
      .scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "nearest",
      });
  } else if (document.getElementById("street").value === "") {
    document
      .getElementById("street")
      .scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "nearest",
      });
  } else if (
    document.getElementById("e-mail").value === "" ||
    !validateEmail(document.getElementById("e-mail").value)
  ) {
    document
      .getElementById("e-mail")
      .scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "nearest",
      });
  } else if (document.getElementById("date-of-birth").value === "") {
    document
      .getElementById("date-of-birth")
      .scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "nearest",
      });
  } else if (document.getElementById("city").value === "") {
    document
      .getElementById("city")
      .scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "nearest",
      });
  } else if ($("input[name=school]:checked").length === 0) {
    document
      .getElementById("yes")
      .scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "nearest",
      });
  } else if ($("input[name=enlgishlevel]:checked").length === 0) {
    document
      .getElementById("2")
      .scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "nearest",
      });
  } else if ($("input[name=budget]:checked").length === 0) {
    document
      .getElementById("0-75-eur")
      .scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "nearest",
      });
  } else if (
    $("input[name=workexperience]:checked").length === 0 &&
    workExperience()
  ) {
    document
      .getElementById("we3")
      .scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "nearest",
      });
  }
}

function errorPush(label) {
  if (label === "~ks-campus") {
    console.log("there was no error");
  } else {
    window.dataLayer.push({
      event: "customEvent",
      eventData: {
        action: "submit error",
        category: "Application Form",
        label: label,
      },
    });
    console.log("error sent");
    console.log(label);
  }
}

function checkCourseTypeOnline(Obj) {
  if (Obj.hasOwnProperty("careIdCs")) {
    return false;
  } else {
    return true;
  }
}

//to check only english letters
document.getElementById("first-name").addEventListener("input", function () {
  this.value = this.value.replace(/[^\x00-\x7F]+/gi, "");
});
document.getElementById("last-name").addEventListener("input", function () {
  this.value = this.value.replace(/[^\x00-\x7F]+/gi, "");
});

$(document).ready(function () {
  let ajaxRequest;
  let preVoucher = voucherVar;
  $("#voucher").keyup(function () {
    let email = document.getElementById("e-mail").value;
    let value = $(this).val();
    clearTimeout(ajaxRequest);
    ajaxRequest = setTimeout(
      function (sn) {
        $.ajax({
          url:
            "https://api.careerpartner.eu/centraldataservice-api/lara/api/v1/application/vouchers/" +
            value +
            "/validate",
          type: "post",
          headers: {
            Authorization: "Basic VC2Bvuh4a5nAvhsd",
            "Content-Type": "application/json",
            "Accept-Language": "fr-CH, fr;q=0.9, en;q=0.8, de;q=0.7, *;q=0.5",
          },
          data: JSON.stringify({
            email: email, //"erickrichard56@gmail.com" for test MCFKENYA
            unit: "cs",
          }),
          dataType: "json",
          success: function (data) {
            console.info(data);
            voucherVar = value;
          },
          error: function () {
            console.log("voucher control failed by validation");
            if (value.startsWith("AGENT")) {
              voucherVar = value;
              console.log("AGENT VOUCHER INSERTED");
            } else {
              voucherVar = preVoucher;
              console.log("back to old voucher");
            }
          },
        });
      },
      100,
      value
    );
  });
});

$(window).scroll(function () {
  if ($(window).scrollTop() == $(document).height() - $(window).height()) {
    $(".summary").css("bottom", "110px");
  } else {
    $(".summary").css("bottom", "10px");
  }
});

$(".container").bind("click", function (e) {
  if ($(e.target).closest("#mySidenav").length == 0) {
    document.getElementById("mySidenav").style.width = "0";
  }
});

let step1 = (function () {
  var executed = false;
  return function () {
    if (!executed) {
      executed = true;

      window.dataLayer.push({
        event: "ee-checkout",
        eventData: {
          action: "checkout",
          category: "ecommerce",
          label: "step 2",
        },
        ecommerce: {
          checkout: {
            actionField: {
              action: "checkout",
              step: 2,
            },
          },
        },
      });

      window.dataLayer.push({
        event: "ee-addToCart",
        eventData: {
          action: "addToCart",
          category: "ecommerce",
        },
        ecommerce: {
          checkout: {
            actionField: {
              action: "addToCart",
              step: 2,
            },
          },
        },
      });
    }
  };
})();

let step3 = (function () {
  var executed = false;
  return function () {
    if (!executed) {
      executed = true;

      window.dataLayer.push({
        event: "ee-checkout",
        eventData: {
          action: "checkout",
          category: "ecommerce",
          label: "step 3",
        },
        ecommerce: {
          checkout: {
            actionField: {
              action: "checkout",
              step: 3,
            },
          },
        },
        user: {
          gender: $("input[name='gender']:checked").val(),
          zip: $("#postcode").val(),
          dateBirth: $("#date-of-birth").val(),
        },
      });
    }
  };
})();

let step4 = (function () {
  var executed = false;
  return function () {
    if (!executed) {
      executed = true;

      window.dataLayer.push({
        event: "ee-checkout",
        eventData: {
          action: "checkout",
          category: "ecommerce",
          label: "step 4",
        },
        ecommerce: {
          checkout: {
            actionField: {
              action: "checkout",
              step: 4,
            },
          },
        },
      });

      window.dataLayer.push({
        event: "ee-checkout_option",
        eventData: {
          action: "checkout-option",
          category: "ecommerce",
        },
        ecommerce: {
          checkout: {
            actionField: {
              action: "checkout-option",
              step: 4,
            },
          },
        },
      });
    }
  };
})();

$("#city").change(function () {
  setTimeout(function () {
    step3();
  }, 5000);
});

$("input[name='workexperience']").click(function () {
  step4();
});

document.querySelectorAll(".toSelect").forEach((item) => {
  item.addEventListener("click", (event) => {
    document.getElementById("voucher").classList.toggle("hide");
    document.getElementById("chevron").classList.toggle("fa-chevron-up");
    document.getElementById("chevron").classList.toggle("fa-chevron-down");
  });
});

function th() {
  let tracker = window.ga.getAll()[0];
  return tracker;
}

let tpt = null;
let q = null;
let z = null;

function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(";").shift();
}

setTimeout(function () {
  if (getCookie("sfStore") !== undefined) {
    tpt = JSON.parse(atob(getCookie("sfStore")));
    q = tpt.gclid;
    z = tpt.utm;
  }
}, 1000);

let disC = 0;

mtCheck = [
  /*'B.A. Aviation Management - 180',
    'B.A. Hospitality Management - 180'*/
];

//change the country here.
$("[name=country]").val(geoplugin_countryCode());

document.getElementById("country").addEventListener("change", function () {
  PriceChange();
});

document.querySelectorAll(".degree").forEach((item) => {
  item.disabled = true;
});
document.querySelectorAll(".study-programme").forEach((item) => {
  item.disabled = true;
});
document.querySelectorAll(".campus").forEach((item) => {
  item.disabled = true;
});
document.querySelectorAll(".study-model").forEach((item) => {
  item.disabled = true;
});
document.querySelectorAll(".study-start").forEach((item) => {
  item.disabled = true;
});

document.querySelectorAll(".campusSite").forEach((item) => {
  item.disabled = true;
});

document.querySelectorAll(".finalPrice").forEach((item) => {
  item.innerHTML = "0000";
});
document.querySelectorAll(".discountPrice").forEach((item) => {
  item.innerHTML = "0000";
});

NanBadHonnef = [
  {
    name: "M.A. International Management - 60",
    tillIntake: "Jul 22, Oct 22, Jan 23, Apr 23",
  },
  {
    name: "M.Eng. Engineering Management - 60",
    tillIntake: "Apr 22",
  },
  {
    name: "M.Sc. Computer Science - 120",
    tillIntake: "Oct 22, Jan 23, Oct 23",
  },
  {
    name: "M.A. International Management - 120",
    tillIntake: "Jul 22",
  },
  {
    name: "M.A. International Management - Specialisation Big Data Management - 120",
    tillIntake: "Jul 22",
  },
  {
    name: "M.A. International Management - Specialisation Engineering Management - 120",
    tillIntake: "Jul 22",
  },
  {
    name: "M.A. International Management - Specialisation IT Management - 120",
    tillIntake: "Jul 22",
  },
  {
    name: "M.A. International Management - Specialisation International Marketing - 120",
    tillIntake: "Jul 22",
  },
  {
    name: "M.A. International Management - Specialisation Finance & Accounting - 120",
    tillIntake: "Jul 22",
  },
  {
    name: "M.A. International Management - Specialisation AI & Robotics - 120",
    tillIntake: "Jul 22",
  },
  {
    name: "MBA One-Year - 60",
    tillIntake: "Apr 22",
  },
  {
    name: "MBA - Master of Business Administration - 90",
    tillIntake: "Jul 22",
  },
  {
    name: "MBA - Specialisation Big Data Management - 90",
    tillIntake: "Jul 22",
  },
  {
    name: "MBA - Specialisation International Marketing - 90",
    tillIntake: "Jul 22",
  },
  {
    name: "MBA - Specialisation Finance & Accounting - 90",
    tillIntake: "Jul 22",
  },
  {
    name: "MBA - Specialisation Engineering Management - 90",
    tillIntake: "Jul 22",
  },
  {
    name: "MBA - Specialisation IT Management - 90",
    tillIntake: "Jul 22",
  },
  {
    name: "MBA - Specialisation Health Care Management - 90",
    tillIntake: "Jul 22",
  },
  {
    name: "MBA - Specialisation Human Resource Management - 90",
    tillIntake: "Jul 22",
  },
  {
    name: "MBA - Specialisation Supply Chain Management - 90",
    tillIntake: "Jul 22",
  },
  {
    name: "MBA - Specialisation Innovation & Entrepreneurship - 90",
    tillIntake: "Jul 22",
  },
  {
    name: "MBA - Specialisation Artificial Intelligence - 90",
    tillIntake: "Jul 22",
  },
  {
    name: "MBA - Specialisation E-Sports Management - 90",
    tillIntake: "Jul 22",
  },
  {
    name: "MBA - Specialisation Salesforce - 90",
    tillIntake: "Jul 22",
  },
  {
    name: "M.A. Management - 60",
    tillIntake: "Jul 22",
  },
  {
    name: "M.A. Management - Specialisation Big Data Management - 60",
    tillIntake: "Jul 22",
  },
  {
    name: "M.A. Management - Specialisation Engineering Management - 60",
    tillIntake: "Jul 22",
  },
  {
    name: "M.A. Management - Specialisation IT Management - 60",
    tillIntake: "Jul 22",
  },
  {
    name: "M.A. Management - Specialisation Finance & Accounting - 60",
    tillIntake: "Jul 22",
  },
  {
    name: "M.A. Management - Specialisation International Marketing - 60",
    tillIntake: "Jul 22",
  },
  {
    name: "M.A. Marketing Management - 120 ECTS",
    tillIntake: "Apr 22",
  },
  {
    name: "M.A. Marketing Management - 60 ECTS",
    tillIntake: "Apr 22",
  },
];

function removeBadHonnefLocation() {
  if (
    mT.find(
      ({ name, studyLocation }) =>
        name === $("#studyProgram :selected").text() &&
        studyLocation === "OnlyBerlin"
    )
  ) {
    $("#badHonnefLocation").addClass("hide");
  }
}

function removeBadHonnefBasedIntake(curIntake) {
  let curIntakeIndex = 0;
  let intakeIndex = 2;

  const isIndexOf = (element) => element === curIntake;
  curIntakeIndex = allIntakes.findIndex(isIndexOf); //to find out what's the index of the curIntake in the allintakes array
  //curIntakeIndex = allIntakes.findIndex(isIndexOf);

  NanBadHonnef.find(({ name, tillIntake }) => {
    if (name === $("#studyProgram :selected").text()) {
      const isIndexOfTillIntake = (element) =>
        element === tillIntake.replace(/\s+/g, "").toLowerCase();
      intakeIndex = allIntakes.findIndex(isIndexOfTillIntake);
    }
  });
  if (
    curIntakeIndex > intakeIndex &&
    NanBadHonnef.find(
      ({ name }) => name === $("#studyProgram :selected").text()
    )
  ) {
    $("#badHonnefLocation").addClass("hide");
  } else {
    $("#badHonnefLocation").removeClass("hide");
  }

  removeBadHonnefLocation();
}

// $("input[name='studyLocation']").change(

  let mT = [
    {
      name: "B.A. Business Administration - 180",
      careId: "10007953_FI",
      //"careIdCs" : '10007953_CS'
      careIdCs: "10008367",
      intake: "Oct 22, Jan 23, Apr 23,  Jul 23",
    },
    {
      name: "B.A. Management - 240",
      careId: "10008630_FI"
    },
    /*{
      name: "B.A. Human Resource Management - 180",
      careId: "10008709_FI"
    },
    {
      name: "B.A. Marketing - 180",
      careId: "10008708_FI"
    },*/
    {
      name: "B.Sc. Industrial and Organisational Psychology - 180",
      careId: "10008626_FI"
    },
    {
      name: "B.Sc. Data Science - 180",
      careId: "10007851",
      careIdCs: "10008525_CS_DS",
      intake: "Oct 22, Oct 23",
    },
    {
      name: "M.Sc. Artificial Intelligence - 60",
      careId: "10007858",
    },
    {
      name: "M.Sc. Artificial Intelligence - 120",
      careId: "10007857",
      careIdCs: "10008529_CS_AI",
      intake: "Oct 22, Apr 23, Oct 23",
      studyLocation: "OnlyBerlin",
    },
    {
      name: "M.Sc. Computer Science - 120",
      careId: "10007941_FI",
      //"careIdCs" : '10007952'
      careIdCs: "10008373",
      intake: "Oct 22, Apr 23, Oct 23",
      intake2: "Apr 22, Oct 22, Apr 23, Oct 23",
      studyLocation: "OnlyBerlin"
    },
  
    {
      name: "M.Sc. Data Science - 60",
      careId: "10007855",
      careIdCs: "10008538_CS_DS",
      intake: "Oct 22, Oct 23",
      studyLocation: "OnlyBerlin",
    },
    {
      name: "M.Sc. Data Science - 120",
      careId: "10007854",
      careIdCs: "10008537_CS_DS",
      intake: "Oct 22, Oct 23",
      studyLocation: "OnlyBerlin",
    },
    {
      name: "M.Sc. Cyber Security - 120",
      careId: "10008014_FI",
      careIdCs: "10008533_CS",
      intake: "Oct 22, Jan 23, Apr 23, Jul 23, Oct 23",
      studyLocation: "OnlyBerlin"
    },
    {
      name: "M.Sc. Cyber Security Management - 60",
      careId: "10008015_FI",
      careIdCs: "10008534_CSM",
      intake: "Oct 22, Jan 23, Apr 23, Jul 23, Oct 23",
      studyLocation: "OnlyBerlin",
    },
    //added today
    {
      name: "M.Sc. Data Management - 60",
      careId: "10008099_FI_DM",
    },
    {
      name: "M.Sc. Data Management - 120",
      careId: "10008098_FI_DM",
    },
    {
      name: "M.Sc. Business Intelligence - 60",
      careId: "10008093_FI_BI",
    },
    {
      name: "M.Sc. Business Intelligence - 120",
      careId: "10008092_FI_BI",
    },
    {
      name: "M.Sc. Finance, Accounting & Taxation - 120",
      careId: "10008096_FI_FAT",
    },
    {
      name: "M.A. Management - 60",
      careId: "10007958_FI",
      //"careIdCs" : '10007958_CS'
      careIdCs: "10008377",
      intake: "Oct 21, Jan 22, Apr 22, Jul 22, Oct 22",
    },
    {
      name: "M.A. Management - Specialisation Finance & Accounting - 60",
      careId: "10007958_FI_FA",
      //"careIdCs" : '10007958_CS_FA'
      careIdCs: "10008377_FA",
      intake: "Jan 22, Apr 22, Jul 22, Oct 22",
    },
    {
      name: "M.A. Management - Specialisation Leadership - 60",
      careId: "10007958_FI_L",
    },
    {
      name: "M.A. International Healthcare Management - 60",
      careId: "10008178_FI_HCM",
    },
    {
      name: "M.A. International Healthcare Management - 120",
      careId: "10008179_FI_HCM",
    },
    {
      name: "M.A. Human Resource Management - 60",
      careId: "10008137_FI_HRM",
    },
    {
      name: "M.A. Human Resource Management - 120",
      careId: "10008136_FI_HRM",
    },
    {
      name: "M.A. Innovation & Entrepreneurship - 120",
      careId: "10008132_FI_IE",
    },
    {
      name: "B.A. Digital Business - 180",
      careId: "10008068_FI",
    },
    //added today
    {
      name: "B.A. International Healthcare Management - 180",
      careId: "10008144_FI_HCM",
    },
    {
      name: "M.A. Management - Specialisation Engineering Management - 60",
      careId: "10007958_FI_EM",
      //"careIdCs" : '10007958_CS_EM'
      careIdCs: "10008377_EM",
      intake: "Jan 22, Apr 22, Jul 22, Oct 22",
    },
    {
      name: "M.A. Management - Specialisation Big Data Management - 60",
      careId: "10007958_FI_BDM",
      //"careIdCs" : '10007958_CS_BDM'
      careIdCs: "10008377_BDM",
      intake: "Jan 22, Apr 22, Jul 22, Oct 22",
      intake2: "Oct 21, Jan 22, Apr 22, Jul 22, Oct 22",
    },
    {
      name: "M.A. Management - Specialisation IT Management - 60",
      careId: "10007958_FI_ITM",
      //"careIdCs" : '10007958_CS_ITM'
      careIdCs: "10008377_ITM",
      intake: "Oct 21, Jan 22, Apr 22, Jul 22, Oct 22",
      intake2: "Jan 22, Apr 22, Jul 22, Oct 22",
    },
    {
      name: "M.A. Management - Specialisation International Marketing - 60",
      careId: "10007958_FI_IM",
      //"careIdCs" : '10007958_CS_IM'
      careIdCs: "10008377_IM",
      intake: "Oct 21, Jan 22, Apr 22, Jul 22, Oct 22",
      intake2: "Jan 22, Apr 22, Jul 22, Oct 22",
    },
    {
      name: "B.Sc. Cyber Security - 180",
      careId: "10007999_FI",
      careIdCs: "10008524_CS",
      intake: "Oct 22, Jan 23, Apr 23, Jul 23, Oct 23",
    },
    {
      name: "MBA One-Year - 60",
      careId: "120_FI",
      //"careIdCs" : '120'
      careIdCs: "10008378",
      intake: "Oct 21, Apr 22, Oct 22, Jan 23, Apr 23, Oct 23",
    },
    {
      name: "MBA - Master of Business Administration - 90",
      careId: "121_FI",
      //"careIdCs" : '121'
      careIdCs: "10008379",
      intake: "Oct 21, Jan 22, Apr 22, Jul 22, Oct 22, Jan 23, Apr 23, Jul 23",
    },
    {
      name: "MBA - Specialisation Big Data Management - 90",
      careId: "121_FI_BDM",
      //"careIdCs" : '121_BDM'
      careIdCs: "10008379_BDM",
      intake: "Oct 21, Jan 22, Apr 22, Jul 22, Oct 22, Jan 23, Apr 23, Jul 23",
    },
    {
      name: "MBA - Specialisation International Marketing - 90",
      careId: "121_FI_IM",
      //"careIdCs" : '121_IM'
      careIdCs: "10008379_IM",
      intake: "Oct 21, Jan 22, Apr 22, Jul 22, Oct 22, Jan 23, Apr 23, Jul 23",
    },
    {
      name: "MBA - Specialisation Finance & Accounting - 90",
      careId: "121_FI_FA",
      //"careIdCs" : '121_FA'
      careIdCs: "10008379_FA",
      intake: "Oct 21, Jan 22, Apr 22, Jul 22, Oct 22, Jan 23, Apr 23, Jul 23",
    },
    {
      name: "MBA - Specialisation Engineering Management - 90",
      careId: "121_FI_EM",
      //"careIdCs" : '121_EM'
      careIdCs: "10008379_EM",
      intake: "Oct 21, Jan 22, Apr 22, Jul 22, Oct 22, Jan 23, Apr 23, Jul 23",
    },
    {
      name: "MBA - Specialisation IT Management - 90",
      careId: "121_FI_ITM",
      //"careIdCs" : '121_ITM'
      careIdCs: "10008379_ITM",
      intake: "Oct 21, Jan 22, Apr 22, Jul 22, Oct 22, Jan 23, Apr 23, Jul 23",
    },
    {
      name: "MBA - Specialisation Health Care Management - 90",
      careId: "121_FI_HCM",
      careIdCs: "10008379_HCM",
      intake: "Apr 22, Jul 22, Oct 22, Jan 23, Apr 23",
    },
    {
      name: "MBA - Specialisation Human Resource Management - 90",
      careId: "121_FI_HRM",
      careIdCs: "10008379_HRM",
      intake: "Apr 22, Jul 22, Oct 22, Jan 23, Apr 23",
    },
    {
      name: "MBA - Specialisation Supply Chain Management - 90",
      careId: "121_FI_SCM",
      careIdCs: "10008379_SCM",
      intake: "Apr 22, Jul 22, Oct 22, Jan 23, Apr 23",
    },
    {
      name: "MBA - Specialisation Innovation & Entrepreneurship - 90",
      careId: "121_FI_IE",
      careIdCs: "10008379_IE",
      intake: "Apr 22, Jul 22, Oct 22, Jan 23, Apr 23",
    },
    {
      name: "MBA - Specialisation Artificial Intelligence - 90",
      careId: "121_FI_AI",
      careIdCs: "10008379_AI",
      intake: "Apr 22, Jul 22, Oct 22, Jan 23, Apr 23",
    },
    {
      name: "MBA - Specialisation E-Sports Management - 90",
      careId: "121_FI_ESM",
      careIdCs: "10008379_ESM",
      intake: "Apr 22, Jul 22, Oct 22, Jan 23, Apr 23, Jul 23, Oct 23",
    },
    {
      name: "MBA - Specialisation Salesforce - 90",
      careId: "121_FI_SF",
      careIdCs: "10008379_SF",
      intake: "Apr 22, Jul 22, Oct 22, Jan 23, Apr 23, Jul 23, Oct 23",
    },
    {
      name: "B.Sc. Applied Artificial Intelligence - 180",
      careId: "10008073_FI_AI",
      careIdCs: "10008523_CS_AAI",
      intake: "Oct 22, Oct 23",
      //needs to be there
    },
    {
      name: "B.A. Entrepreneurship - 180",
      careId: "10008062_FI",
      careIdCs: "10008526_CS_ENT",
      intake: "Oct 22",
    },
    {
      name: "B.Sc. Business & IT - 180",
      careId: "10008001_FI",
      //"careIdCs" : '10008001_CS'
      careIdCs: "10008368",
      intake: "Oct 22, Jan 23, Apr 23,  Jul 23",
    },
    {
      name: "B.Eng. Robotics - 180",
      careId: "10007964_FI",
      careIdCs: "10008527_CS_ROB",
      intake: "Oct 22, Jan 23, Apr 23, Jul 23",
    },
    /*{
          "name" : 'B.Eng. Engineering - 180',
          "careId" : '10008091_FI_E'
      },*/
    {
      name: "B.Eng. Industrial Engineering & Management - 180",
      careId: "10008000_FI",
      //"careIdCs" : '10008000_CS'
      careIdCs: "10008370",
      intake: "Oct 22, Jan 23, Apr 23,  Jul 23",
    },
    {
      name: "B.A. International Management - 180",
      careId: "10008002_FI",
      //"careIdCs" : '10008002_CS'
      careIdCs: "10008371",
      intake: "Oct 21, Jan 22, Apr 22, Jul 22, Oct 22",
    },
    {
      name: "B.A. Aviation Management - 180",
      careId: "10008295_FI_AM",
      careIdCs: "10008472",
      intake: "Oct 22, Jan 23, Apr 23, Jul 23, Oct 23",
    },
    {
      name: "B.A. Hospitality Management - 180",
      careId: "10008294_FI_HM",
      careIdCs: "10008477",
      intake: "Oct 22, Jan 23, Apr 23, Jul 23, Oct 23",
    },
    {
      name: "M.A. Marketing Management - 60",
      careId: "10007977_FI",
      careIdCs: "10008540_CS_MM",
      intake: "Oct 22",
      studyLocation: "OnlyBerlin",
    },
    {
      name: "M.A. Marketing Management - 120",
      careId: "10007976_FI",
      careIdCs: "10008539_CS_MM",
      intake: "Oct 22",
      studyLocation: "OnlyBerlin",
    },
    {
      name: "M.A. Information Technology Management - 60",
      careId: "10008090_FI_ITM",
    },
    {
      name: "M.A. Information Technology Management - 120",
      careId: "10008089_FI_ITM",
    },
    {
      name: "M.A. Digital Innovation & Intrapreneurship - 60",
      careId: "10008133_FI_DII",
    },
    {
      name: "M.A. Project Management - 60", //today
      careId: "10008088_FI_PM",
    },
    {
      name: "M.A. Project Management - 120", //today
      careId: "10008087_FI_PM",
    },
    {
      name: "B.Sc. Computer Science - 180",
      careId: "10007944_FI",
      careIdCs: "10008369",
      intake: "Oct 21, Apr 22, Oct 22",
    },
    {
      name: "B.Sc. Software Development - 180",
      careId: "10008074_FI_SD",
      careIdCs: "10008528_CS_SD",
      intake: "Oct 22, Apr 23, Oct 23",
    },
    {
      name: "M.A. International Management - 60",
      careId: "10008044_FI",
      st_careId: "70",
      //"careIdCs" : '10008044_CS'
      careIdCs: "10008376",
      intake: "Jul 22, Oct 22, Jan 23, Apr 23",
    },
    {
      name: "M.A. International Management - 120",
      careId: "10008045_FI",
      st_careId: "70",
      //"careIdCs" : '10008045_CS'
      careIdCs: "10008375",
      intake: "Oct 21, Jan 22, Apr 22, Jul 22, Oct 22",
    },
    {
      name: "M.A. International Management - Specialisation AI & Robotics - 120",
      careId: "10008045_FI_AR",
      st_careId: "70",
      //"careIdCs" : '10008045_CS_AR'
      careIdCs: "10008375_AR",
      intake: "Oct 21, Jan 22, Apr 22, Jul 22, Oct 22",
    },
    {
      name: "M.A. International Management - Specialisation Big Data Management - 120",
      careId: "10008045_FI_BDM",
      st_careId: "70",
      //"careIdCs" : '10008045_CS_BDM'
      careIdCs: "10008375_BDM",
      intake: "Oct 21, Jan 22, Apr 22, Jul 22, Oct 22",
    },
    {
      name: "M.A. International Management - Specialisation Engineering Management - 120",
      careId: "10008045_FI_EM",
      st_careId: "70",
      //"careIdCs" : '10008045_CS_EM'
      careIdCs: "10008375_EM",
      intake: "Oct 21, Jan 22, Apr 22, Jul 22, Oct 22",
    },
    {
      name: "M.A. International Management - Specialisation IT Management - 120",
      careId: "10008045_FI_ITM",
      st_careId: "70",
      //"careIdCs" : '10008045_CS_ITM'
      careIdCs: "10008375_ITM",
      intake: "Oct 21, Jan 22, Apr 22, Jul 22, Oct 22",
    },
    {
      name: "M.A. International Management - Specialisation International Marketing - 120",
      careId: "10008045_FI_IM",
      st_careId: "70",
      //"careIdCs" : '10007958_CS_IM'
      careIdCs: "10008375_IM",
      intake: "Oct 21, Jan 22, Apr 22, Jul 22, Oct 22",
      intake2: "Jan 22, Apr 22, Jul 22, Oct 22",
    },
    {
      name: "M.A. International Management - Specialisation Finance & Accounting - 120",
      careId: "10008045_FI_FA",
      st_careId: "70",
      //"careIdCs" : '10008045_CS_FA'
      careIdCs: "10008375_FA",
      intake: "Oct 21, Jan 22, Apr 22, Jul 22, Oct 22",
    },
    {
      name: "M.Eng. Engineering Management - 60",
      careId: "10008075_FI",
      st_careId: "70",
      //"careIdCs" : '10008075_CS'
      careIdCs: "10008374",
      intake: "Oct 22, Apr 22, Oct 22, Apr 23, Oct 23",
      studyLocation: "OnlyBerlin"
    },
  ];
//ALL THESE ARE FLEX PROGRAMS

//online only
mtCheckOnline = [
  "B.Sc. Data Science - 180",
  "B.A. Digital Business - 180",
  "M.Sc. Data Science - 60",
  "M.Sc. Data Science - 120",
  "M.Sc. Artificial Intelligence - 60",
  "M.A. Management - Specialisation Leadership - 60",
  "M.A. Information Technology Management - 60",
  "M.A. Information Technology Management - 120",
  "M.Sc. Data Management - 60",
  "M.Sc. Data Management - 120",
  "B.A. International Healthcare Management - 180",
  "M.A. International Healthcare Management - 120",
  "M.A. International Healthcare Management - 60",
  "M.A. Human Resource Management - 120",
  "M.A. Human Resource Management - 60",
  "B.Sc. Software Development - 180",
  "M.A. Digital Innovation & Intrapreneurship - 60",
  "M.Sc. Business Intelligence - 60",
  "M.Sc. Business Intelligence - 120",
  "M.Sc. Finance, Accounting & Taxation - 120",
  "M.A. Innovation & Entrepreneurship - 120",
  "B.Eng. Engineering - 180",
];

function fullOut(dip) {
  let option;
  function populate(x, w, t) {
    //t = [];
    //showing each obj its attributes
    for (let i = 0; i < mT.length; i++) {
      if (mT[i].name.startsWith(dip) && !checkCourseTypeOnline(mT[i])) {
        //t.push();
        option = document.createElement("option");
        option.text = mT[i].name;
        option.value = mT[i].careIdCs;
        w.add(option);
      }
    }
  }

  populate("studies", InitiateDropDown("studyProgram"), "name");

  function InitiateDropDown(y) {
    let dropdown = document.getElementById(y);
    dropdown.length = 0;
    dropdown.selectedIndex = 0;

    return dropdown;
  }
}

function validatefilledIn() {
  let requiredFields = document.getElementsByTagName("input");
  let arr = Array.from(requiredFields).filter((input) => input.required);
  let arr2 = $("label").filter(".pl-0");

  if ($("#Degree").find(":selected").text().startsWith("S")) {
    $("#Degree").css("border-color", "red");
  } else {
    $("#Degree").css("border-color", "green");
  }
  if ($("#studyProgram").find(":selected").text().startsWith("S")) {
    $("#studyProgram").css("border-color", "red");
  } else {
    $("#studyProgram").css("border-color", "green");
  }

  if (
    !mtCheckOnline.includes($("#studyProgram").find(":selected").text()) &&
    !(
      $("#Degree").find(":selected").text().startsWith("S") ||
      $("#studyProgram").find(":selected").text().startsWith("S")
    )
  ) {
    for (let i = 0; i < 2; i++) {
      if ($("input[name=studyLocation]:checked").length === 0) {
        arr2[i].style.borderColor = "red";
        setTimeout(function () {
          arr2[i].style.borderColor = "";
        }, 3000);
      } else {
        arr2[i].style.borderColor = "green";
      }
    }
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].value == "") {
      $(arr[i]).val("").css("border-color", "red");
    } else {
      $(arr[i]).css("border-color", "green");
    }
  }

  for (let i = 1; i < 8; i++) {
    if ($("input[name=intake]:checked").length === 0) {
      arr2[i].style.borderColor = "red";
      setTimeout(function () {
        arr2[i].style.borderColor = "";
      }, 3000);
    } else {
      arr2[i].style.borderColor = "green";
    }
  }

  for (let i = 8; i < 10; i++) {
    if ($("input[name=site]:checked").length === 0) {
      arr2[i].style.borderColor = "red";
      setTimeout(function () {
        arr2[i].style.borderColor = "";
      }, 3000);
    } else {
      arr2[i].style.borderColor = "green";
    }
  }
  for (let i = 10; i < 14; i++) {
    if ($("input[name=gender]:checked").length === 0) {
      arr2[i].style.borderColor = "red";
      setTimeout(function () {
        arr2[i].style.borderColor = "";
      }, 3000);
    } else {
      arr2[i].style.borderColor = "green";
    }
  }
  for (let i = 14; i < 16; i++) {
    if ($("input[name=school]:checked").length === 0) {
      arr2[i].style.borderColor = "red";
      setTimeout(function () {
        arr2[i].style.borderColor = "";
      }, 3000);
    } else {
      arr2[i].style.borderColor = "green";
    }
  }
  for (let i = 16; i < 26; i++) {
    if ($("input[name=enlgishlevel]:checked").length === 0) {
      arr2[i].style.borderColor = "red";
      setTimeout(function () {
        arr2[i].style.borderColor = "";
      }, 3000);
    } else {
      arr2[i].style.borderColor = "green";
    }
  }
  for (let i = 26; i < 30; i++) {
    if ($("input[name=budget]:checked").length === 0) {
      arr2[i].style.borderColor = "red";
      setTimeout(function () {
        arr2[i].style.borderColor = "";
      }, 3000);
    } else {
      arr2[i].style.borderColor = "green";
    }
  }
  for (let i = 30; i < 39; i++) {
    if ($("input[name=workexperience]:checked").length === 0) {
      arr2[i].style.borderColor = "red";
      setTimeout(function () {
        arr2[i].style.borderColor = "";
      }, 3000);
    } else {
      arr2[i].style.borderColor = "green";
    }
  }
}

function checkingFields() {
  let myNameCheck = document.getElementById("first-name").value;
  let surNameCheck = document.getElementById("last-name").value;

  if (
    $("#Degree").find(":selected").text().startsWith("S") ||
    $("#studyProgram").find(":selected").text().startsWith("S")
  ) {
    validatefilledIn();
    $("#myModalStudyProgramme").modal();
    document.getElementById("submit").disabled = false;
    return false;
  } /*else if (!mtCheckOnline.includes($('#studyProgram').find(":selected").text()) && $('input[name=studyLocation]:checked').length === 0){
            validatefilledIn();
            $("#myModalStudyModel").modal();
            document.getElementById("submit").disabled = false;
            return false;
    }*/ /*else if($('input[name=timemodel]:checked').length === 0) {
            validatefilledIn();
            $("#timeModelModal").modal();
            $(".tm label").css('border-color', '#FF0000');
            setTimeout(function () {
                $(".tm label").css('border-color', '#A5ABA6');
            },5000)
            document.getElementById("submit").disabled = false;
            return false;
    }*/ /*else if(!mtCheckOnline.includes($('#studyProgram').find(":selected").text()) && $('input[name=intake]:checked').length === 0 && $('input[name="studyLocation"]:checked').val() === "Study on campus") {
            validatefilledIn();
            $("#myModalStartDate").modal();
            document.getElementById("submit").disabled = false;
            return false;
    }*/ /*else if(!mtCheckOnline.includes($('#studyProgram').find(":selected").text()) && $('input[name=intake]:checked').length > 0 && $('input[name=studyLocation]:checked').length > 0 && $('input[name=site]:checked').length === 0) {
            validatefilledIn();
            $("#myModalSite").modal();
            document.getElementById("submit").disabled = false;
            return false;
    }*/ else if ($("input[name=gender]:checked").length === 0) {
    validatefilledIn();
    $("#myModalgender").modal();
    document.getElementById("submit").disabled = false;
    return false;
  } else if (
    myNameCheck == "" ||
    surNameCheck == "" ||
    document.getElementById("street").value === "" ||
    document.getElementById("e-mail").value === "" ||
    document.getElementById("date-of-birth").value === "" ||
    document.getElementById("city").value === "" ||
    document.getElementById("city").value === ""
  ) {
    validatefilledIn();
    $("#myModal").modal();
    document.getElementById("submit").disabled = false;
    return false;
  } else if (!validateEmail(document.getElementById("e-mail").value)) {
    validatefilledIn();
    $("#emailModal").modal();
    document.getElementById("submit").disabled = false;
    return false;
  } else if (
    $("input[name=school]:checked").length === 0 ||
    $("input[name=budget]:checked").length === 0 ||
    $("input[name=enlgishlevel]:checked").length === 0
  ) {
    validatefilledIn();
    $("#eligibilityModal").modal();
    document.getElementById("submit").disabled = false;
    return false;
  } else {
    return true;
  }
}

function activate() {
  PriceChange();
  if (document.getElementById("submit").disabled === false) {
    document.getElementById("submit").disabled = true;
    if (!checkingFields()) {
      let x = EmptyFields();
      scrollTo();
      errorPush(x);
      return 0;
    }
    $(".loading").toggleClass("hide");
    let degree = document.getElementById("Degree").value;
    let myName = document.getElementById("first-name").value;
    let surName = document.getElementById("last-name").value;
    let street = document.getElementById("street").value;
    let streetno = document.getElementById("nr").value;
    let postcode = document.getElementById("postcode").value;
    let city = document.getElementById("city").value;
    let country = document.getElementById("country").value;
    let nationality = document.getElementById("nationality").value;
    let studyStartDate =
      document.getElementsByClassName("study-start")[0].value;
    let fullNumber =
      document.getElementsByClassName("iti__selected-dial-code")[0].innerText +
      document.getElementById("phone").value;
    let email = document.getElementById("e-mail").value;
    let studyProgram = document.getElementById("studyProgram").value;
    let englishLevel = document.getElementsByClassName("EnglishLevelSummary")[0]
      .value;
    let budgetPerMonth =
      document.getElementsByClassName("budgetSummary")[0].value;
    let campsite = document.getElementsByClassName("campusSite")[0].value;

    let workExperience = 10;
    if (
      document.getElementsByClassName("workExperienceSummary")[0].value !== ""
    ) {
      workExperience = document.getElementsByClassName(
        "workExperienceSummary"
      )[0].value;
    }

    let diplom = document.getElementsByClassName("Diploma")[0].value;
    let gender = document.getElementsByClassName("gender")[0].value;
    let finalPrice =
      parseFloat(document.getElementsByClassName("finalPrice")[0].innerHTML) /
      parseFloat(
        document.getElementsByClassName("study-model")[0].value
      ); /*-(800/parseFloat(document.getElementsByClassName('study-model')[0].value))*/
    let dateOfBirth = document.getElementById("date-of-birth").value;

    let startDate = null;
    if (document.getElementsByClassName("intake")[0].value !== "") {
      //studyStartDate = null;
      for (let i = 0; i < mT.length; i++) {
        if (mT[i].name === $("#studyProgram :selected").text()) {
          startDate = document.getElementsByClassName("intake")[0].value;
        }
      }
    }
    let studyDuration = document.getElementsByClassName("study-model")[0].value;

    let optIn = document.getElementById("toCheck").checked;

    let t = {
      degree: degree,
      name: myName,
      surName: surName,
      street: street,
      streetno: streetno,
      postcode: postcode,
      city: city,
      country: country,
      nationality: nationality,
      mobileNumber: fullNumber,
      email: email,
      studyProgram: studyProgram,
      studyStartDate: studyStartDate,
      englishLevel: englishLevel,
      workExperience: workExperience,
      budgetPerMonth: budgetPerMonth,
      diplom: diplom,
      gender: gender,
      finalPrice: finalPrice,
      dateOfBirth: dateOfBirth,
      studyDuration: studyDuration,
      locationSite: locationSite,
      intake: startDate,
      voucher: voucherVar,
      optIn: optIn,
      businessUnit: businessUnit,
      key: "",
      completed: completed,
      currentPage: currentPage,
      obwVersion: obwVersion,
      agbVersion: agbVersion,
    };
    let obj;

    fetch(
      "https://api.careerpartner.eu/centraldataservice-api/lara/api/v2/application/obw",
      {
        method: "POST",
        headers: {
          //Authorization: "TPPDVgSNCvp4TY5y",
          Authorization: "74UgeuBcRZjX6akV",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          key: null,
          completed: completed,
          currentPage: currentPage,
          businessUnit: businessUnit,
          version: null,
          formVersion: "Application",
          locale: "en",
          obwVersion: obwVersion,
          gender: gender,
          firstName: myName,
          lastName: surName,
          nationality: nationality,
          dateOfBirth: dateOfBirth,
          placeOfBirth: nationality,
          startDate: startDate,
          countryOfBirth: country,
          email: email,
          phone: fullNumber,
          street: street,
          streetNo: streetno,
          zip: postcode,
          city: city,
          country: country,
          studyProgram: studyProgram,
          studyStartDate: studyStartDate,
          intake: null,
          studySite: locationSite,
          duration: studyDuration,
          monthlyFee: finalPrice,
          graduationFee: 0,
          voucherId: voucherVar,
          paymentInterval: null,
          directDebit: directDebit,
          accountOwner: null,
          accountBank: null,
          accountIBAN: null,
          accountBIC: null,
          agbVersion: agbVersion,
          hasStudied: null,
          hasDiploma: diplom,
          referralCode: null,
          referrerName: null,
          referrerEmail: null,
          ectsAchieved: null,
          masterPermission: null,
          ipad: false,
          attendanceDays: null,
          englishLevel: englishLevel,
          workExperience: workExperience,
          budgetPerMonth: budgetPerMonth,
          attendeeProgram: null,
          isESigningAgreed: false,
          startMonth: null,
          gaClientId: th().get("clientId"),
          gaGuid: th().get("userId"),
          gaTrackingId: th().get("trackingId"),
          gaReferrer: th().get("referrer"),
          gtmUtm: z,
          gtmGclid: q,
          gtmSource: null,
          optIn: optIn,
        }),
      }
    )
      .then((res) => {
        if (!res.ok) {
          throw Error("error getting the API to POST");
        }
        return res.json();
      })
      .then((data) => {
        obj = data;
      })
      .then(() => {
        t.key = obj.key;
        console.log(obj.key);

        for (let i = 0; i < $(".file-row").length; i++) {
          console.log(i);
          data.append("upload", files.files[i]);
          fetch(
            "https://api.careerpartner.eu/centraldataservice-api/lara/api/v2/file/" +
              obj.key +
              "/file-upload?type=application",
            {
              method: "POST",
              body: data,
            }
          ).then((res) => {
            if (!res.ok) {
              throw Error("error getting the API to POST");
            }
            console.log(res);
          });
        }
        //study-model it as a json
        localStorage.setItem("allData", JSON.stringify(t));
        window.dataLayer.push({
          event: "ee-transaction",
          eventData: {
            label: "",
            action: "transaction",
            category: "ecommerce",
          },
          ecommerce: {
            purchase: {
              actionField: {
                id: t.key,
                coupon: t.voucher,
              },
              products: [
                {
                  name: $("#studyProgram :selected").text(),
                  id: t.studyProgram,
                  category: "studiegang/" + degree.toLowerCase(),
                  variant: t.studyDuration + "Monat~" + t.studyStartDate,
                  quantity: 1,
                  brand: t.locationSite,
                  value: t.finalPrice,
                  location: campsite,
                  duration: t.duration,
                  intake: t.intake,
                  businessUnit: t.businessUnit,
                },
              ],
            },
          },
          user: {
            id: t.key,
          },
          mqa: {
            budget: budgetPerMonth,
            englishlevel: englishLevel,
            workExperience: workExperience,
            diploma: diplom,
          },
        });
        console.log(t.businessUnit);
        console.log(t.completed);
        setTimeout(function () {
          window.location.href = "./upload/index.html?key=" + t.key;
        }, 5000);
      })
      .catch((error) => console.log(error));
    return false;
  }
}

//**************************************************

function findOutAndChange(x, y) {
  let D1 = document.getElementById(x);
  let D2 = document.getElementsByClassName(y);
  if (y === "study-programme") {
  } else if (y === "study-model") {
    for (let i = 0; i < D2.length; i++) {
      D2[i].value = D1.value;
      PriceChange();
    }
    if ($("input[name='timemodel']:checked").length !== 0) {
      step1();
    }
  } else if (y === "gender") {
    for (let i = 0; i < D2.length; i++) {
      if (D1.value === "Male") {
        D2[i].value = 1;
      } else if (D1.value === "Female") {
        D2[i].value = 2;
      } else if (D1.value === "Non-Binary") {
        D2[i].value = 1;
      } else {
        D2[i].value = 1;
      }
    }
  } else if (y === "diploma") {
    for (let i = 0; i < D2.length; i++) {
      if (D1.value === "Yes") {
        D2[i].value = true;
      } else {
        D2[i].value = false;
      }
    }
  } else if (x === "Degree") {
    for (let i = 0; i < D2.length; i++) {
      if (D1.value === "Bachelor") {
        D2[i].value = D1.value;
      } else {
        D2[i].value = D1.value;
      }
    }
  } else if (x === "winterintake" || x === "winterintake2") {
    //intakes here
    document.getElementsByClassName("intake")[0].value = "2022-01-01";
    document.getElementsByClassName("intake")[1].value = "2022-01-01";
    /*for (let i = 0; i < D2.length; i++) {
            D2[i].value = $("#"+x).val();
        }*/
    removeBadHonnefBasedIntake("jan22");
    checkIntakeStart();
  } else if (x === "summerintake" || x === "summerintake") {
    document.getElementsByClassName("intake")[0].value = "2022-04-01";
    document.getElementsByClassName("intake")[1].value = "2022-04-01";
    /*for (let i = 0; i < D2.length; i++) {
            D2[i].value = $("#"+x).val();
        }*/
    removeBadHonnefBasedIntake("apr22");
    checkIntakeStart();
  } else if (x === "summerintake" || x === "summerintake2") {
    document.getElementsByClassName("intake")[0].value = "2022-06-01";
    document.getElementsByClassName("intake")[1].value = "2022-06-01";
    /*for (let i = 0; i < D2.length; i++) {
            D2[i].value = $("#"+x).val();
        }*/
    removeBadHonnefBasedIntake("jul22");
    checkIntakeStart();
  } else if (x === "winterintake3") {
    document.getElementsByClassName("intake")[0].value = "2022-10-01";
    document.getElementsByClassName("intake")[1].value = "2022-10-01";
    /*for (let i = 0; i < D2.length; i++) {
            D2[i].value = $("#"+x).val();
        }*/
    removeBadHonnefBasedIntake("oct22");
    checkIntakeStart();
  } else if (x === "summerintake3") {
    document.getElementsByClassName("intake")[0].value = "2023-04-01";
    document.getElementsByClassName("intake")[1].value = "2023-04-01";
    /*for (let i = 0; i < D2.length; i++) {
            D2[i].value = $("#"+x).val();
        }*/
    removeBadHonnefBasedIntake("apr23");
    checkIntakeStart();
  } else if (x === "winterintake4") {
    document.getElementsByClassName("intake")[0].value = "2023-10-01";
    document.getElementsByClassName("intake")[1].value = "2023-10-01";
    /*for (let i = 0; i < D2.length; i++) {
            D2[i].value = $("#"+x).val();
        }*/
    removeBadHonnefBasedIntake("oct22");
    checkIntakeStart();
  } else if (x === "winterintakejan23") {
    document.getElementsByClassName("intake")[0].value = "2023-01-01";
    document.getElementsByClassName("intake")[1].value = "2023-01-01";
    /*for (let i = 0; i < D2.length; i++) {
            D2[i].value = $("#"+x).val();
        }*/
    removeBadHonnefBasedIntake("jan23");
    checkIntakeStart();
  } else if (x === "summerintakejul23") {
    document.getElementsByClassName("intake")[0].value = "2023-06-01";
    document.getElementsByClassName("intake")[1].value = "2023-06-01";
    /*for (let i = 0; i < D2.length; i++) {
            D2[i].value = $("#"+x).val();
        }*/
    removeBadHonnefBasedIntake("jul23");
    checkIntakeStart();
  } else {
    for (let i = 0; i < D2.length; i++) {
      D2[i].value = D1.value;
    }
  }
}

function HideElements(item) {
  for (let i = 0; i < item.length; i++) {
    item[i].style.display = "none";
  }
}

let toHide = document.getElementsByClassName("toHide");
HideElements(toHide);

function checkLocation() {
  if ($('input[name="studyLocation"]:checked').val() === "Study on campus") {
    $("#intakes").show();
    $("#site").show();
    $(".siteRow").show();
    $(".labelMonthlyPrice").text("Monthly Price");
    $(".labelMonthlyPrice").css("line-height", "44px");
    $("#campus1").css(
      "background",
      "url(./images/on-campus.png) 95% center no-repeat"
    );
    $("#campus2").css(
      "background",
      "url(./images/on-campus.png) 95% center no-repeat"
    );
    $("#rowLocTwo").removeClass("hide");
    $("div").find("label[for=monthstwo]").hide();
    $("div").find("label[for=monthsthree]").hide();
  }
}

function PriceChange() {
  let x = 0;

  if (
    $('input[name="studyLocation"]:checked').val() === "Study on campus" &&
    $("#studyProgram :selected").text().includes("180")
  ) {
    disC = discMyStu180B;
    voucherVar = "IUINTLMYSTUDISCOUNT40";
  } else if (
    $('input[name="studyLocation"]:checked').val() === "Study on campus" &&
    $("#studyProgram :selected").text().includes("90")
  ) {
    disC = discMyStu90M;
    voucherVar = "IUINTLMYSTUDISCOUNT25";
  } else if (
    $('input[name="studyLocation"]:checked').val() === "Study on campus" &&
    $("#studyProgram :selected").text().includes("60")
  ) {
    disC = discMyStu60M;
    voucherVar = "IUINTLMYSTUDISCOUNT35";
  } else if (
    $('input[name="studyLocation"]:checked').val() === "Study on campus" &&
    $("#studyProgram :selected").text().includes("120")
  ) {
    disC = discMyStu120M;
    voucherVar = "IUINTLMYSTUDISCOUNT33";
  } else {
    disC = storeDisc;
  }

  switch (mtCheck.includes($("#studyProgram :selected").text())) {
    case true: {
      if ($("#studyProgram :selected").text().includes("180")) {
        //verifyStudyModel()
        switch (document.getElementsByClassName("study-model")[0].value) {
          case "48": {
            document.getElementsByClassName("finalPrice")[0].innerHTML =
              "23490";
            document.getElementsByClassName("finalPrice")[1].innerHTML =
              "23490";
            document.getElementsByClassName(
              "totalBeforeDiscount"
            )[0].innerHTML = "23490";
            document.getElementsByClassName(
              "totalBeforeDiscount"
            )[1].innerHTML = "23490";
            document.getElementsByClassName("monthlyPriceBefore")[0].innerHTML =
              Math.ceil((parseFloat("23490") / 48).toFixed(1));
            document.getElementsByClassName("monthlyPriceBefore")[1].innerHTML =
              Math.ceil((parseFloat("23490") / 48).toFixed(1));
            x = parseFloat("23490");
            document.getElementsByClassName("discountPrice")[0].innerHTML =
              Math.ceil(x.toFixed(1));
            document.getElementsByClassName("discountPrice")[1].innerHTML =
              Math.ceil(x.toFixed(1));
            document.getElementsByClassName("monthlyPrice")[0].innerHTML =
              Math.ceil((parseFloat(x) / 48).toFixed(1));
            document.getElementsByClassName("monthlyPrice")[1].innerHTML =
              Math.ceil((parseFloat(x) / 48).toFixed(1));
            break;
          }
          case "72": {
            document.getElementsByClassName("finalPrice")[0].innerHTML =
              "26990";
            document.getElementsByClassName("finalPrice")[1].innerHTML =
              "26990";
            document.getElementsByClassName(
              "totalBeforeDiscount"
            )[0].innerHTML = "26990";
            document.getElementsByClassName(
              "totalBeforeDiscount"
            )[1].innerHTML = "26990";
            document.getElementsByClassName("monthlyPriceBefore")[0].innerHTML =
              Math.ceil((parseFloat("26990") / 72).toFixed(1));
            document.getElementsByClassName("monthlyPriceBefore")[1].innerHTML =
              Math.ceil((parseFloat("26990") / 72).toFixed(1));
            x = parseFloat("26990");
            document.getElementsByClassName("discountPrice")[0].innerHTML =
              Math.ceil(x.toFixed(1));
            document.getElementsByClassName("discountPrice")[1].innerHTML =
              Math.ceil(x.toFixed(1));
            document.getElementsByClassName("monthlyPrice")[0].innerHTML =
              Math.ceil((parseFloat(x) / 72).toFixed(1));
            document.getElementsByClassName("monthlyPrice")[1].innerHTML =
              Math.ceil((parseFloat(x) / 72).toFixed(1));
            break;
          }
          default: {
            document.getElementsByClassName("finalPrice")[0].innerHTML =
              "20990";
            document.getElementsByClassName("finalPrice")[1].innerHTML =
              "20990";
            document.getElementsByClassName(
              "totalBeforeDiscount"
            )[0].innerHTML = "20990";
            document.getElementsByClassName(
              "totalBeforeDiscount"
            )[1].innerHTML = "20990";
            document.getElementsByClassName("monthlyPriceBefore")[0].innerHTML =
              Math.ceil((parseFloat("20990") / 36).toFixed(1));
            document.getElementsByClassName("monthlyPriceBefore")[1].innerHTML =
              Math.ceil((parseFloat("20990") / 36).toFixed(1));
            x = parseFloat("20990");
            document.getElementsByClassName("discountPrice")[0].innerHTML =
              Math.ceil(x.toFixed(1));
            document.getElementsByClassName("discountPrice")[1].innerHTML =
              Math.ceil(x.toFixed(1));
            document.getElementsByClassName("monthlyPrice")[0].innerHTML =
              Math.ceil((parseFloat(x) / 36).toFixed(1));
            document.getElementsByClassName("monthlyPrice")[1].innerHTML =
              Math.ceil((parseFloat(x) / 36).toFixed(1));
          }
        }
      } else if ($("#studyProgram :selected").text().includes("60")) {
        //verifyStudyModel()
        switch (document.getElementsByClassName("study-model")[0].value) {
          case "18": {
            document.getElementsByClassName("finalPrice")[0].innerHTML =
              "13950";
            document.getElementsByClassName("finalPrice")[1].innerHTML =
              "13950";
            document.getElementsByClassName(
              "totalBeforeDiscount"
            )[0].innerHTML = "13950";
            document.getElementsByClassName(
              "totalBeforeDiscount"
            )[1].innerHTML = "13950";
            document.getElementsByClassName("monthlyPriceBefore")[0].innerHTML =
              Math.ceil((parseFloat("13950") / 18).toFixed(1));
            document.getElementsByClassName("monthlyPriceBefore")[1].innerHTML =
              Math.ceil((parseFloat("13950") / 18).toFixed(1));
            x = parseFloat("13950");
            document.getElementsByClassName("discountPrice")[0].innerHTML =
              Math.ceil(x.toFixed(1));
            document.getElementsByClassName("discountPrice")[1].innerHTML =
              Math.ceil(x.toFixed(1));
            document.getElementsByClassName("monthlyPrice")[0].innerHTML =
              Math.ceil((parseFloat(x) / 18).toFixed(1));
            document.getElementsByClassName("monthlyPrice")[1].innerHTML =
              Math.ceil((parseFloat(x) / 18).toFixed(1));
            break;
          }
          case "24": {
            document.getElementsByClassName("finalPrice")[0].innerHTML =
              "14550";
            document.getElementsByClassName("finalPrice")[1].innerHTML =
              "14550";
            document.getElementsByClassName(
              "totalBeforeDiscount"
            )[0].innerHTML = "14550";
            document.getElementsByClassName(
              "totalBeforeDiscount"
            )[1].innerHTML = "14550";
            document.getElementsByClassName("monthlyPriceBefore")[0].innerHTML =
              Math.ceil((parseFloat("14550") / 24).toFixed(1));
            document.getElementsByClassName("monthlyPriceBefore")[1].innerHTML =
              Math.ceil((parseFloat("14550") / 24).toFixed(1));
            x = parseFloat("14550");
            document.getElementsByClassName("discountPrice")[0].innerHTML =
              Math.ceil(x.toFixed(1));
            document.getElementsByClassName("discountPrice")[1].innerHTML =
              Math.ceil(x.toFixed(1));
            document.getElementsByClassName("monthlyPrice")[0].innerHTML =
              Math.ceil((parseFloat(x) / 24).toFixed(1));
            document.getElementsByClassName("monthlyPrice")[1].innerHTML =
              Math.ceil((parseFloat(x) / 24).toFixed(1));
            break;
          }
          default: {
            document.getElementsByClassName("finalPrice")[0].innerHTML =
              "11950";
            document.getElementsByClassName("finalPrice")[1].innerHTML =
              "11950";
            document.getElementsByClassName(
              "totalBeforeDiscount"
            )[0].innerHTML = "11950";
            document.getElementsByClassName(
              "totalBeforeDiscount"
            )[1].innerHTML = "11950";
            document.getElementsByClassName("monthlyPriceBefore")[0].innerHTML =
              Math.ceil((parseFloat("11950") / 12).toFixed(1));
            document.getElementsByClassName("monthlyPriceBefore")[1].innerHTML =
              Math.ceil((parseFloat("11950") / 12).toFixed(1));
            x = parseFloat("11950");
            document.getElementsByClassName("discountPrice")[0].innerHTML =
              Math.ceil(x.toFixed(1));
            document.getElementsByClassName("discountPrice")[1].innerHTML =
              Math.ceil(x.toFixed(1));
            document.getElementsByClassName("monthlyPrice")[0].innerHTML =
              Math.ceil((parseFloat(x) / 12).toFixed(1));
            document.getElementsByClassName("monthlyPrice")[1].innerHTML =
              Math.ceil((parseFloat(x) / 12).toFixed(1));
          }
        }
      } else if ($("#studyProgram :selected").text().includes("120")) {
        //verifyStudyModel()
        switch (document.getElementsByClassName("study-model")[0].value) {
          case "36": {
            document.getElementsByClassName("finalPrice")[0].innerHTML =
              "19990";
            document.getElementsByClassName("finalPrice")[1].innerHTML =
              "19990";
            document.getElementsByClassName(
              "totalBeforeDiscount"
            )[0].innerHTML = "19990";
            document.getElementsByClassName(
              "totalBeforeDiscount"
            )[1].innerHTML = "19990";
            document.getElementsByClassName("monthlyPriceBefore")[0].innerHTML =
              Math.ceil((parseFloat("19990") / 36).toFixed(1));
            document.getElementsByClassName("monthlyPriceBefore")[1].innerHTML =
              Math.ceil((parseFloat("19990") / 36).toFixed(1));
            x = parseFloat("19990");
            document.getElementsByClassName("discountPrice")[0].innerHTML =
              Math.ceil(x.toFixed(1));
            document.getElementsByClassName("discountPrice")[1].innerHTML =
              Math.ceil(x.toFixed(1));
            document.getElementsByClassName("monthlyPrice")[0].innerHTML =
              Math.ceil((parseFloat(x) / 36).toFixed(1));
            document.getElementsByClassName("monthlyPrice")[1].innerHTML =
              Math.ceil((parseFloat(x) / 36).toFixed(1));
            break;
          }
          case "48": {
            document.getElementsByClassName("finalPrice")[0].innerHTML =
              "23490";
            document.getElementsByClassName("finalPrice")[1].innerHTML =
              "23490";
            document.getElementsByClassName(
              "totalBeforeDiscount"
            )[0].innerHTML = "23490";
            document.getElementsByClassName(
              "totalBeforeDiscount"
            )[1].innerHTML = "23490";
            document.getElementsByClassName("monthlyPriceBefore")[0].innerHTML =
              Math.ceil((parseFloat("19990") / 36).toFixed(1));
            document.getElementsByClassName("monthlyPriceBefore")[1].innerHTML =
              Math.ceil((parseFloat("19990") / 36).toFixed(1));
            x = parseFloat("23490");
            document.getElementsByClassName("discountPrice")[0].innerHTML =
              Math.ceil(x.toFixed(1));
            document.getElementsByClassName("discountPrice")[1].innerHTML =
              Math.ceil(x.toFixed(1));
            document.getElementsByClassName("monthlyPrice")[0].innerHTML =
              Math.ceil((parseFloat(x) / 48).toFixed(1));
            document.getElementsByClassName("monthlyPrice")[1].innerHTML =
              Math.ceil((parseFloat(x) / 48).toFixed(1));
            break;
          }
          default: {
            document.getElementsByClassName("finalPrice")[0].innerHTML =
              "17990";
            document.getElementsByClassName("finalPrice")[1].innerHTML =
              "17990";
            document.getElementsByClassName(
              "totalBeforeDiscount"
            )[0].innerHTML = "17990";
            document.getElementsByClassName(
              "totalBeforeDiscount"
            )[1].innerHTML = "17990";
            document.getElementsByClassName("monthlyPriceBefore")[0].innerHTML =
              Math.ceil((parseFloat("19990") / 36).toFixed(1));
            document.getElementsByClassName("monthlyPriceBefore")[1].innerHTML =
              Math.ceil((parseFloat("19990") / 36).toFixed(1));
            x = parseFloat("17990");
            document.getElementsByClassName("discountPrice")[0].innerHTML =
              Math.ceil(x.toFixed(1));
            document.getElementsByClassName("discountPrice")[1].innerHTML =
              Math.ceil(x.toFixed(1));
            document.getElementsByClassName("monthlyPrice")[0].innerHTML =
              Math.ceil((parseFloat(x) / 24).toFixed(1));
            document.getElementsByClassName("monthlyPrice")[1].innerHTML =
              Math.ceil((parseFloat(x) / 24).toFixed(1));
          }
        }
      } else if ($("#studyProgram :selected").text().includes("90")) {
        //verifyStudyModel()
        switch (document.getElementsByClassName("study-model")[0].value) {
          case "24": {
            document.getElementsByClassName("finalPrice")[0].innerHTML =
              "17990";
            document.getElementsByClassName("finalPrice")[1].innerHTML =
              "17990";
            document.getElementsByClassName(
              "totalBeforeDiscount"
            )[0].innerHTML = "17990";
            document.getElementsByClassName(
              "totalBeforeDiscount"
            )[1].innerHTML = "17990";
            document.getElementsByClassName("monthlyPriceBefore")[0].innerHTML =
              Math.ceil((parseFloat("17990") / 24).toFixed(1));
            document.getElementsByClassName("monthlyPriceBefore")[1].innerHTML =
              Math.ceil((parseFloat("17990") / 24).toFixed(1));
            x = parseFloat("17990");
            document.getElementsByClassName("discountPrice")[0].innerHTML =
              Math.ceil(x.toFixed(1));
            document.getElementsByClassName("discountPrice")[1].innerHTML =
              Math.ceil(x.toFixed(1));
            document.getElementsByClassName("monthlyPrice")[0].innerHTML =
              Math.ceil((parseFloat(x) / 24).toFixed(1));
            document.getElementsByClassName("monthlyPrice")[1].innerHTML =
              Math.ceil((parseFloat(x) / 24).toFixed(1));
            break;
          }
          case "36": {
            document.getElementsByClassName("finalPrice")[0].innerHTML =
              "19990";
            document.getElementsByClassName("finalPrice")[1].innerHTML =
              "19990";
            document.getElementsByClassName(
              "totalBeforeDiscount"
            )[0].innerHTML = "19990";
            document.getElementsByClassName(
              "totalBeforeDiscount"
            )[1].innerHTML = "19990";
            document.getElementsByClassName("monthlyPriceBefore")[0].innerHTML =
              Math.ceil((parseFloat("19990") / 36).toFixed(1));
            document.getElementsByClassName("monthlyPriceBefore")[1].innerHTML =
              Math.ceil((parseFloat("19990") / 36).toFixed(1));
            x = parseFloat("19990");
            document.getElementsByClassName("discountPrice")[0].innerHTML =
              Math.ceil(x.toFixed(1));
            document.getElementsByClassName("discountPrice")[1].innerHTML =
              Math.ceil(x.toFixed(1));
            document.getElementsByClassName("monthlyPrice")[0].innerHTML =
              Math.ceil((parseFloat(x) / 36).toFixed(1));
            document.getElementsByClassName("monthlyPrice")[1].innerHTML =
              Math.ceil((parseFloat(x) / 36).toFixed(1));
            break;
          }
          default: {
            document.getElementsByClassName("finalPrice")[0].innerHTML =
              "15990";
            document.getElementsByClassName("finalPrice")[1].innerHTML =
              "15990";
            document.getElementsByClassName(
              "totalBeforeDiscount"
            )[0].innerHTML = "15990";
            document.getElementsByClassName(
              "totalBeforeDiscount"
            )[1].innerHTML = "15990";
            document.getElementsByClassName("monthlyPriceBefore")[0].innerHTML =
              Math.ceil((parseFloat("15990") / 18).toFixed(1));
            document.getElementsByClassName("monthlyPriceBefore")[1].innerHTML =
              Math.ceil((parseFloat("15990") / 18).toFixed(1));
            x = parseFloat("15990");
            document.getElementsByClassName("discountPrice")[0].innerHTML =
              Math.ceil(x.toFixed(1));
            document.getElementsByClassName("discountPrice")[1].innerHTML =
              Math.ceil(x.toFixed(1));
            document.getElementsByClassName("monthlyPrice")[0].innerHTML =
              Math.ceil((parseFloat(x) / 18).toFixed(1));
            document.getElementsByClassName("monthlyPrice")[1].innerHTML =
              Math.ceil((parseFloat(x) / 18).toFixed(1));
          }
        }
      }

      break;
    }

    default: {
      if ($("#studyProgram :selected").text().includes("180")) {
        //verifyStudyModel()
        switch (document.getElementsByClassName("study-model")[0].value) {
          case "48": {
            document.getElementsByClassName("finalPrice")[0].innerHTML =
              "23490";
            document.getElementsByClassName("finalPrice")[1].innerHTML =
              "23490";
            document.getElementsByClassName(
              "totalBeforeDiscount"
            )[0].innerHTML = "23490";
            document.getElementsByClassName(
              "totalBeforeDiscount"
            )[1].innerHTML = "23490";
            document.getElementsByClassName("monthlyPriceBefore")[0].innerHTML =
              Math.ceil((parseFloat("23490") / 48).toFixed(1));
            document.getElementsByClassName("monthlyPriceBefore")[1].innerHTML =
              Math.ceil((parseFloat("23490") / 48).toFixed(1));
            x = parseFloat("23490") * disC;
            document.getElementsByClassName("discountPrice")[0].innerHTML =
              Math.ceil(x.toFixed(1));
            document.getElementsByClassName("discountPrice")[1].innerHTML =
              Math.ceil(x.toFixed(1));
            document.getElementsByClassName("monthlyPrice")[0].innerHTML =
              Math.ceil((parseFloat(x) / 48).toFixed(1));
            document.getElementsByClassName("monthlyPrice")[1].innerHTML =
              Math.ceil((parseFloat(x) / 48).toFixed(1));
            break;
          }
          case "72": {
            document.getElementsByClassName("finalPrice")[0].innerHTML =
              "26990";
            document.getElementsByClassName("finalPrice")[1].innerHTML =
              "26990";
            document.getElementsByClassName(
              "totalBeforeDiscount"
            )[0].innerHTML = "26990";
            document.getElementsByClassName(
              "totalBeforeDiscount"
            )[1].innerHTML = "26990";
            document.getElementsByClassName("monthlyPriceBefore")[0].innerHTML =
              Math.ceil((parseFloat("26990") / 72).toFixed(1));
            document.getElementsByClassName("monthlyPriceBefore")[1].innerHTML =
              Math.ceil((parseFloat("26990") / 72).toFixed(1));
            x = parseFloat("26990") * disC;
            document.getElementsByClassName("discountPrice")[0].innerHTML =
              Math.ceil(x.toFixed(1));
            document.getElementsByClassName("discountPrice")[1].innerHTML =
              Math.ceil(x.toFixed(1));
            document.getElementsByClassName("monthlyPrice")[0].innerHTML =
              Math.ceil((parseFloat(x) / 72).toFixed(1));
            document.getElementsByClassName("monthlyPrice")[1].innerHTML =
              Math.ceil((parseFloat(x) / 72).toFixed(1));
            break;
          }
          default: {
            document.getElementsByClassName("finalPrice")[0].innerHTML =
              "20990";
            document.getElementsByClassName("finalPrice")[1].innerHTML =
              "20990";
            document.getElementsByClassName(
              "totalBeforeDiscount"
            )[0].innerHTML = "20990";
            document.getElementsByClassName(
              "totalBeforeDiscount"
            )[1].innerHTML = "20990";
            document.getElementsByClassName("monthlyPriceBefore")[0].innerHTML =
              Math.ceil((parseFloat("20990") / 36).toFixed(1));
            document.getElementsByClassName("monthlyPriceBefore")[1].innerHTML =
              Math.ceil((parseFloat("20990") / 36).toFixed(1));
            x = parseFloat("20990") * disC;
            document.getElementsByClassName("discountPrice")[0].innerHTML =
              Math.ceil(x.toFixed(1));
            document.getElementsByClassName("discountPrice")[1].innerHTML =
              Math.ceil(x.toFixed(1));
            document.getElementsByClassName("monthlyPrice")[0].innerHTML =
              Math.ceil((parseFloat(x) / 36).toFixed(1));
            document.getElementsByClassName("monthlyPrice")[1].innerHTML =
              Math.ceil((parseFloat(x) / 36).toFixed(1));
          }
        }
      } else if ($("#studyProgram :selected").text().includes("60")) {
        //verifyStudyModel()
        switch (document.getElementsByClassName("study-model")[0].value) {
          case "18": {
            document.getElementsByClassName("finalPrice")[0].innerHTML =
              "13950";
            document.getElementsByClassName("finalPrice")[1].innerHTML =
              "13950";
            document.getElementsByClassName(
              "totalBeforeDiscount"
            )[0].innerHTML = "13950";
            document.getElementsByClassName(
              "totalBeforeDiscount"
            )[1].innerHTML = "13950";
            document.getElementsByClassName("monthlyPriceBefore")[0].innerHTML =
              Math.ceil((parseFloat("13950") / 18).toFixed(1));
            document.getElementsByClassName("monthlyPriceBefore")[1].innerHTML =
              Math.ceil((parseFloat("13950") / 18).toFixed(1));
            x = parseFloat("13950") * disC;
            document.getElementsByClassName("discountPrice")[0].innerHTML =
              Math.ceil(x.toFixed(1));
            document.getElementsByClassName("discountPrice")[1].innerHTML =
              Math.ceil(x.toFixed(1));
            document.getElementsByClassName("monthlyPrice")[0].innerHTML =
              Math.ceil((parseFloat(x) / 18).toFixed(1));
            document.getElementsByClassName("monthlyPrice")[1].innerHTML =
              Math.ceil((parseFloat(x) / 18).toFixed(1));
            break;
          }
          case "24": {
            document.getElementsByClassName("finalPrice")[0].innerHTML =
              "14550";
            document.getElementsByClassName("finalPrice")[1].innerHTML =
              "14550";
            document.getElementsByClassName(
              "totalBeforeDiscount"
            )[0].innerHTML = "14550";
            document.getElementsByClassName(
              "totalBeforeDiscount"
            )[1].innerHTML = "14550";
            document.getElementsByClassName("monthlyPriceBefore")[0].innerHTML =
              Math.ceil((parseFloat("14550") / 24).toFixed(1));
            document.getElementsByClassName("monthlyPriceBefore")[1].innerHTML =
              Math.ceil((parseFloat("14550") / 24).toFixed(1));
            x = parseFloat("14550") * disC;
            document.getElementsByClassName("discountPrice")[0].innerHTML =
              Math.ceil(x.toFixed(1));
            document.getElementsByClassName("discountPrice")[1].innerHTML =
              Math.ceil(x.toFixed(1));
            document.getElementsByClassName("monthlyPrice")[0].innerHTML =
              Math.ceil((parseFloat(x) / 24).toFixed(1));
            document.getElementsByClassName("monthlyPrice")[1].innerHTML =
              Math.ceil((parseFloat(x) / 24).toFixed(1));
            break;
          }
          default: {
            document.getElementsByClassName("finalPrice")[0].innerHTML =
              "11950";
            document.getElementsByClassName("finalPrice")[1].innerHTML =
              "11950";
            document.getElementsByClassName(
              "totalBeforeDiscount"
            )[0].innerHTML = "11950";
            document.getElementsByClassName(
              "totalBeforeDiscount"
            )[1].innerHTML = "11950";
            document.getElementsByClassName("monthlyPriceBefore")[0].innerHTML =
              Math.ceil((parseFloat("11950") / 12).toFixed(1));
            document.getElementsByClassName("monthlyPriceBefore")[1].innerHTML =
              Math.ceil((parseFloat("11950") / 12).toFixed(1));
            x = parseFloat("11950") * disC;
            document.getElementsByClassName("discountPrice")[0].innerHTML =
              Math.ceil(x.toFixed(1));
            document.getElementsByClassName("discountPrice")[1].innerHTML =
              Math.ceil(x.toFixed(1));
            document.getElementsByClassName("monthlyPrice")[0].innerHTML =
              Math.ceil((parseFloat(x) / 12).toFixed(1));
            document.getElementsByClassName("monthlyPrice")[1].innerHTML =
              Math.ceil((parseFloat(x) / 12).toFixed(1));
          }
        }
      } else if ($("#studyProgram :selected").text().includes("120")) {
        //verifyStudyModel()
        switch (document.getElementsByClassName("study-model")[0].value) {
          case "36": {
            document.getElementsByClassName("finalPrice")[0].innerHTML =
              "19990";
            document.getElementsByClassName("finalPrice")[1].innerHTML =
              "19990";
            document.getElementsByClassName(
              "totalBeforeDiscount"
            )[0].innerHTML = "19990";
            document.getElementsByClassName(
              "totalBeforeDiscount"
            )[1].innerHTML = "19990";
            document.getElementsByClassName("monthlyPriceBefore")[0].innerHTML =
              Math.ceil((parseFloat("19990") / 36).toFixed(1));
            document.getElementsByClassName("monthlyPriceBefore")[1].innerHTML =
              Math.ceil((parseFloat("19990") / 36).toFixed(1));
            x = parseFloat("19990") * disC;
            document.getElementsByClassName("discountPrice")[0].innerHTML =
              Math.ceil(x.toFixed(1));
            document.getElementsByClassName("discountPrice")[1].innerHTML =
              Math.ceil(x.toFixed(1));
            document.getElementsByClassName("monthlyPrice")[0].innerHTML =
              Math.ceil((parseFloat(x) / 36).toFixed(1));
            document.getElementsByClassName("monthlyPrice")[1].innerHTML =
              Math.ceil((parseFloat(x) / 36).toFixed(1));
            break;
          }
          case "48": {
            document.getElementsByClassName("finalPrice")[0].innerHTML =
              "23490";
            document.getElementsByClassName("finalPrice")[1].innerHTML =
              "23490";
            document.getElementsByClassName(
              "totalBeforeDiscount"
            )[0].innerHTML = "23490";
            document.getElementsByClassName(
              "totalBeforeDiscount"
            )[1].innerHTML = "23490";
            document.getElementsByClassName("monthlyPriceBefore")[0].innerHTML =
              Math.ceil((parseFloat("23490") / 48).toFixed(1));
            document.getElementsByClassName("monthlyPriceBefore")[1].innerHTML =
              Math.ceil((parseFloat("23490") / 48).toFixed(1));
            x = parseFloat("23490") * disC;
            document.getElementsByClassName("discountPrice")[0].innerHTML =
              Math.ceil(x.toFixed(1));
            document.getElementsByClassName("discountPrice")[1].innerHTML =
              Math.ceil(x.toFixed(1));
            document.getElementsByClassName("monthlyPrice")[0].innerHTML =
              Math.ceil((parseFloat(x) / 48).toFixed(1));
            document.getElementsByClassName("monthlyPrice")[1].innerHTML =
              Math.ceil((parseFloat(x) / 48).toFixed(1));
            break;
          }
          default: {
            document.getElementsByClassName("finalPrice")[0].innerHTML =
              "17990";
            document.getElementsByClassName("finalPrice")[1].innerHTML =
              "17990";
            document.getElementsByClassName(
              "totalBeforeDiscount"
            )[0].innerHTML = "17990";
            document.getElementsByClassName(
              "totalBeforeDiscount"
            )[1].innerHTML = "17990";
            document.getElementsByClassName("monthlyPriceBefore")[0].innerHTML =
              Math.ceil((parseFloat("17990") / 24).toFixed(1));
            document.getElementsByClassName("monthlyPriceBefore")[1].innerHTML =
              Math.ceil((parseFloat("17990") / 24).toFixed(1));
            x = parseFloat("17990") * disC;
            document.getElementsByClassName("discountPrice")[0].innerHTML =
              Math.ceil(x.toFixed(1));
            document.getElementsByClassName("discountPrice")[1].innerHTML =
              Math.ceil(x.toFixed(1));
            document.getElementsByClassName("monthlyPrice")[0].innerHTML =
              Math.ceil((parseFloat(x) / 24).toFixed(1));
            document.getElementsByClassName("monthlyPrice")[1].innerHTML =
              Math.ceil((parseFloat(x) / 24).toFixed(1));
          }
        }
      } else if ($("#studyProgram :selected").text().includes("90")) {
        //verifyStudyModel()
        switch (document.getElementsByClassName("study-model")[0].value) {
          case "24": {
            document.getElementsByClassName("finalPrice")[0].innerHTML =
              "17990";
            document.getElementsByClassName("finalPrice")[1].innerHTML =
              "17990";
            document.getElementsByClassName(
              "totalBeforeDiscount"
            )[0].innerHTML = "17990";
            document.getElementsByClassName(
              "totalBeforeDiscount"
            )[1].innerHTML = "17990";
            document.getElementsByClassName("monthlyPriceBefore")[0].innerHTML =
              Math.ceil((parseFloat("17990") / 24).toFixed(1));
            document.getElementsByClassName("monthlyPriceBefore")[1].innerHTML =
              Math.ceil((parseFloat("17990") / 24).toFixed(1));
            x = parseFloat("17990") * disC;
            document.getElementsByClassName("discountPrice")[0].innerHTML =
              Math.ceil(x.toFixed(1));
            document.getElementsByClassName("discountPrice")[1].innerHTML =
              Math.ceil(x.toFixed(1));
            document.getElementsByClassName("monthlyPrice")[0].innerHTML =
              Math.ceil((parseFloat(x) / 24).toFixed(1));
            document.getElementsByClassName("monthlyPrice")[1].innerHTML =
              Math.ceil((parseFloat(x) / 24).toFixed(1));
            break;
          }
          case "36": {
            document.getElementsByClassName("finalPrice")[0].innerHTML =
              "19990";
            document.getElementsByClassName("finalPrice")[1].innerHTML =
              "19990";
            document.getElementsByClassName(
              "totalBeforeDiscount"
            )[0].innerHTML = "19990";
            document.getElementsByClassName(
              "totalBeforeDiscount"
            )[1].innerHTML = "19990";
            document.getElementsByClassName("monthlyPriceBefore")[0].innerHTML =
              Math.ceil((parseFloat("19990") / 36).toFixed(1));
            document.getElementsByClassName("monthlyPriceBefore")[1].innerHTML =
              Math.ceil((parseFloat("19990") / 36).toFixed(1));
            x = parseFloat("19990") * disC;
            document.getElementsByClassName("discountPrice")[0].innerHTML =
              Math.ceil(x.toFixed(1));
            document.getElementsByClassName("discountPrice")[1].innerHTML =
              Math.ceil(x.toFixed(1));
            document.getElementsByClassName("monthlyPrice")[0].innerHTML =
              Math.ceil((parseFloat(x) / 36).toFixed(1));
            document.getElementsByClassName("monthlyPrice")[1].innerHTML =
              Math.ceil((parseFloat(x) / 36).toFixed(1));
            break;
          }
          default: {
            document.getElementsByClassName("finalPrice")[0].innerHTML =
              "15990";
            document.getElementsByClassName("finalPrice")[1].innerHTML =
              "15990";
            document.getElementsByClassName(
              "totalBeforeDiscount"
            )[0].innerHTML = "15990";
            document.getElementsByClassName(
              "totalBeforeDiscount"
            )[1].innerHTML = "15990";
            document.getElementsByClassName("monthlyPriceBefore")[0].innerHTML =
              Math.ceil((parseFloat("15990") / 18).toFixed(1));
            document.getElementsByClassName("monthlyPriceBefore")[1].innerHTML =
              Math.ceil((parseFloat("15990") / 18).toFixed(1));
            x = parseFloat("15990") * disC;
            document.getElementsByClassName("discountPrice")[0].innerHTML =
              Math.ceil(x.toFixed(1));
            document.getElementsByClassName("discountPrice")[1].innerHTML =
              Math.ceil(x.toFixed(1));
            document.getElementsByClassName("monthlyPrice")[0].innerHTML =
              Math.ceil((parseFloat(x) / 18).toFixed(1));
            document.getElementsByClassName("monthlyPrice")[1].innerHTML =
              Math.ceil((parseFloat(x) / 18).toFixed(1));
          }
        }
      }
    }
  }
}

document.getElementById("Degree").addEventListener("change", function () {
  $("#rowLocTwo").removeClass("hide");

  $(".labelMonthlyPrice").text("Monthly Price With Scholarship");
  $(".labelMonthlyPrice").css("line-height", "18px");
  $("#campus1").css(
    "background",
    "url(./images/online.png) 95% center no-repeat"
  );
  $("#campus2").css(
    "background",
    "url(./images/online.png) 95% center no-repeat"
  );

  $("#campus1").css("background", "url()");
  $("#campus2").css("background", "url()");

  setTimeout(function () {
    $("#studyOnCampus").trigger("click");
  }, 100);

  //time model showing up
  $("div").find("label[for=monthstwo]").show();
  $("div").find("label[for=monthsthree]").show();

  if (document.getElementById("Degree").value == "Master") {
    fullOut("M");
    starting();
    $(".siteRow").hide();
    document.getElementById("bgrInformation").innerHTML =
      "Do you have a Bachelor Diploma?";
    document.getElementById("workExperienceRow").classList.remove("hide");
    document.getElementsByClassName("numMonth")[0].innerHTML = 12;
    document.getElementById("monthsone").value = "12";

    document.getElementsByClassName("study-programme")[0].value = $(
      "#studyProgram"
    )
      .find(":selected")
      .text();
    document.getElementsByClassName("study-programme")[1].value = $(
      "#studyProgram"
    )
      .find(":selected")
      .text();
    document.getElementsByClassName("finalPrice")[0].classList.add("crossed");
    document.getElementsByClassName("finalPrice")[1].classList.add("crossed");
  } else {
    fullOut("B");
    starting();
    $(".siteRow").show();
    document.getElementById("bgrInformation").innerHTML =
      "Do you have a High School Diploma?";
    document.getElementById("workExperienceRow").classList.add("hide");
    document.getElementsByClassName("numMonth")[0].innerHTML = 36;
    document.getElementById("monthsone").value = "36";
    document.getElementsByClassName("study-programme")[0].value = $(
      "#studyProgram"
    )
      .find(":selected")
      .text();
    document.getElementsByClassName("study-programme")[1].value = $(
      "#studyProgram"
    )
      .find(":selected")
      .text();
    document.getElementsByClassName("finalPrice")[0].classList.add("crossed");
    document.getElementsByClassName("finalPrice")[1].classList.add("crossed");
  }
});

document.getElementById("studyProgram").addEventListener("change", function () {
  checkLocation();

  setTimeout(function () {
    $("#studyOnCampus").trigger("click");
  }, 100);

  if ($("#studyProgram :selected").text().includes("60")) {
    starting();
    document.getElementById("bgrInformation").innerHTML =
      "Do you have a Bachelor Diploma?";
    document.getElementsByClassName("numMonth")[0].innerHTML = 12;
    document.getElementById("monthsone").value = "12";
    document.getElementsByClassName("study-programme")[0].value = $(
      "#studyProgram"
    )
      .find(":selected")
      .text();
    document.getElementsByClassName("study-programme")[1].value = $(
      "#studyProgram"
    )
      .find(":selected")
      .text();
  } else if ($("#studyProgram :selected").text().includes("120")) {
    starting();
    document.getElementById("bgrInformation").innerHTML =
      "Do you have a Bachelor Diploma?";
    document.getElementsByClassName("numMonth")[0].innerHTML = 24;
    document.getElementById("monthsone").value = "24";
    document.getElementsByClassName("study-programme")[0].value = $(
      "#studyProgram"
    )
      .find(":selected")
      .text();
    document.getElementsByClassName("study-programme")[1].value = $(
      "#studyProgram"
    )
      .find(":selected")
      .text();
  } else if ($("#studyProgram :selected").text().includes("90")) {
    starting();
    document.getElementById("bgrInformation").innerHTML =
      "Do you have a Bachelor Diploma?";
    document.getElementsByClassName("numMonth")[0].innerHTML = 18;
    document.getElementById("monthsone").value = "18";
    document.getElementsByClassName("study-programme")[0].value = $(
      "#studyProgram"
    )
      .find(":selected")
      .text();
    document.getElementsByClassName("study-programme")[1].value = $(
      "#studyProgram"
    )
      .find(":selected")
      .text();
  } else {
    starting();
    //because all the rest is bachelor
    document.getElementsByClassName("study-programme")[0].value = $(
      "#studyProgram"
    )
      .find(":selected")
      .text();
    document.getElementsByClassName("study-programme")[1].value = $(
      "#studyProgram"
    )
      .find(":selected")
      .text();
  }
});

function checkIntakeStart() {
  switch ($("input[type=radio][name=intake]:checked").val()) {
    case "October 2021": {
      document.getElementsByClassName("study-start")[0].value = "2021/10/01";
      document.getElementsByClassName("study-start")[1].value = "2021/10/01";

      break;
    }
    case "October 2022": {
      document.getElementsByClassName("study-start")[0].value = "2022/10/01";
      document.getElementsByClassName("study-start")[1].value = "2022/10/01";

      break;
    }
    case "January 2022": {
      document.getElementsByClassName("study-start")[0].value = "2022/01/01";
      document.getElementsByClassName("study-start")[1].value = "2022/01/01";

      break;
    }
    case "April 2022": {
      document.getElementsByClassName("study-start")[0].value = "2022/04/01";
      document.getElementsByClassName("study-start")[1].value = "2022/04/01";

      break;
    }
    case "April 2023": {
      document.getElementsByClassName("study-start")[0].value = "2023/04/01";
      document.getElementsByClassName("study-start")[1].value = "2023/04/01";

      break;
    }
    case "October 2023": {
      document.getElementsByClassName("study-start")[0].value = "2023/10/01";
      document.getElementsByClassName("study-start")[1].value = "2023/10/01";

      break;
    }
    case "January 2023": {
      document.getElementsByClassName("study-start")[0].value = "2023/01/01";
      document.getElementsByClassName("study-start")[1].value = "2023/01/01";

      break;
    }
    case "July 2023": {
      document.getElementsByClassName("study-start")[0].value = "2023/07/01";
      document.getElementsByClassName("study-start")[1].value = "2023/07/01";

      break;
    }
    default: {
      document.getElementsByClassName("study-start")[0].value = "2022/07/01";
      document.getElementsByClassName("study-start")[1].value = "2022/07/01";
    }
  }
}

function starting() {
  businessUnit = "cs";
  obwVersion = "defaultEN";
  agbVersion = "3.1";
  directDebit = true;
  locationSite = "4";
  currentPage = 3;
  completed = true;

  document.querySelectorAll(".study-model").forEach((item) => {
    item.value = "";
  });
  document.querySelectorAll(".models").forEach((item) => {
    item.checked = false;
  });

  document.querySelectorAll("[name='intake']").forEach((item) => {
    item.checked = false;
  });

  $('input[name="studyLocation"]').prop("checked", false);

  document.querySelectorAll(".finalPrice").forEach((item) => {
    item.innerHTML = "0000";
  });
  document.querySelectorAll(".discountPrice").forEach((item) => {
    item.innerHTML = "0000";
  });
  document.querySelectorAll(".monthlyPrice").forEach((item) => {
    item.innerHTML = "0000";
  });
  document.querySelectorAll(".totalBeforeDiscount").forEach((item) => {
    item.innerHTML = "0000";
  });
  document.querySelectorAll(".monthlyPriceBefore").forEach((item) => {
    item.innerHTML = "0000";
  });
  document.querySelectorAll(".study-start").forEach((item) => {
    item.value = "";
  });

  if (mtCheck.includes($("#studyProgram :selected").text())) {
    document.querySelectorAll(".intake").forEach((item) => {
      item.value = "70";
      $(".labelStudyStart").text("Intake");
    });
  } else {
    document.querySelectorAll(".intake").forEach((item) => {
      item.value = "";
      $(".labelStudyStart").text("Study Start");
    });
  }

  document.getElementsByClassName("finalPrice")[0].classList.remove("crossed");
  document.getElementsByClassName("finalPrice")[1].classList.remove("crossed");

  document.getElementById("submit").disabled = false;
}

document.querySelectorAll(".models").forEach((item) => {
  item.addEventListener("click", (event) => {
    if (
      $("#Degree").find(":selected").text().startsWith("S") &&
      $("#studyProgram").find(":selected").text().startsWith("S")
    ) {
      validatefilledIn();
      $("#modalIntakes").modal();
      starting();
      return false;
    }
    if (!mtCheck.includes($("#studyProgram :selected").text())) {
      document.getElementsByClassName("finalPrice")[0].classList.add("crossed");
      document.getElementsByClassName("finalPrice")[1].classList.add("crossed");
    }
  });
});

document.querySelectorAll("[name='intake']").forEach((item) => {
  item.addEventListener("click", (event) => {
    if (
      $("#Degree").find(":selected").text().startsWith("S") &&
      $("#studyProgram").find(":selected").text().startsWith("S")
    ) {
      validatefilledIn();
      $(".tm label").css("border-color", "#FF0000");
      setTimeout(function () {
        $(".tm label").css("border-color", "#A5ABA6");
      }, 5000);
      $("#myModal2").modal();
      starting();
      return false;
    }
    if (!mtCheck.includes($("#studyProgram :selected").text())) {
      document.getElementsByClassName("finalPrice")[0].classList.add("crossed");
      document.getElementsByClassName("finalPrice")[1].classList.add("crossed");
    }
  });
});

//=================== NEW ADDED CHANGES

let storeDisc = disC;
$("input[name='studyLocation']").change(function () {
  if ($('input[name="studyLocation"]:checked').val() === "Study on campus") {
    businessUnit = "cs";
    obwVersion = "defaultEN";
    agbVersion = "3.1";
    directDebit = true;

    checkLocation();
    PriceChange();
    $(".admissionFee").show();

    files = document.querySelector('input[type="file"]');

    $("input[name=timemodel]:checked").prop("checked", false);
    for (let i = 0; i < mT.length; i++) {
      if (mT[i].name === $("#studyProgram :selected").text()) {
        currentProgramme = mT[i];
        if (currentProgramme.hasOwnProperty("intake")) {
          ProgrammeIntakes = [];
          difference = [];
          console.log("new stuff");
          currentProgramme.intake.split(", ").forEach(function (e, incre, t) {
            ProgrammeIntakes.push(e.replace(" ", "").toLowerCase());
            $(`#${ProgrammeIntakes[incre]}`).removeClass("hide");
            console.log(`#${ProgrammeIntakes[incre]}`);
          });
          difference = allIntakes.filter((x) => !ProgrammeIntakes.includes(x));
          console.log("=========");
          difference.forEach(function (e, incre, t) {
            $(`#${difference[incre]}`).addClass("hide");
            console.log(`#${difference[incre]}`);
          });
        }
      }
    }
  }
});

$("#studyOnCampus").click(function () {
  setTimeout(function () {
    $("#monthsone").trigger("click");
    $("#intakes div.col-md-6").each(function (index) {
      if (!$(this).hasClass("hide")) {
        $('input[name="intake"]')[index].click();
        return false;
      }
    });
    locationSite = "4";
    $("#berlin").trigger("click");
  }, 100);
});

$("input[name='site']").change(function () {
  if ($('input[name="site"]:checked').val() === "Bad Honnef") {
    $("#campusSite1").css(
      "background",
      "url(./images/village.png) 95% center no-repeat"
    );
    $("#campusSite2").css(
      "background",
      "url(./images/village.png) 95% center no-repeat"
    );

    locationSite = "1";
    //added this last
    for (let i = 0; i < mT.length; i++) {
      if (mT[i].name === $("#studyProgram :selected").text()) {
        currentProgramme = mT[i];
        if (currentProgramme.hasOwnProperty("intake2")) {
          ProgrammeIntakes = [];
          difference = [];
          console.log("new stuff");
          currentProgramme.intake2.split(", ").forEach(function (e, incre, t) {
            ProgrammeIntakes.push(e.replace(" ", "").toLowerCase());
            $(`#${ProgrammeIntakes[incre]}`).removeClass("hide");
            console.log(`#${ProgrammeIntakes[incre]}`);
          });
          difference = allIntakes.filter((x) => !ProgrammeIntakes.includes(x));
          console.log("=========");
          difference.forEach(function (e, incre, t) {
            $(`#${difference[incre]}`).addClass("hide");
            console.log(`#${difference[incre]}`);
          });
        }
      }
    }
  } else {
    for (let i = 0; i < mT.length; i++) {
      if (mT[i].name === $("#studyProgram :selected").text()) {
        currentProgramme = mT[i];
        if (currentProgramme.hasOwnProperty("intake")) {
          ProgrammeIntakes = [];
          difference = [];
          console.log("new stuff");
          currentProgramme.intake.split(", ").forEach(function (e, incre, t) {
            ProgrammeIntakes.push(e.replace(" ", "").toLowerCase());
            $(`#${ProgrammeIntakes[incre]}`).removeClass("hide");
            console.log(`#${ProgrammeIntakes[incre]}`);
          });
          difference = allIntakes.filter((x) => !ProgrammeIntakes.includes(x));
          console.log("=========");
          difference.forEach(function (e, incre, t) {
            $(`#${difference[incre]}`).addClass("hide");
            console.log(`#${difference[incre]}`);
          });
        }
      }
    }

    $("#campusSite1").css(
      "background",
      "url(./images/skyline.png) 95% center no-repeat"
    );
    $("#campusSite2").css(
      "background",
      "url(./images/skyline.png) 95% center no-repeat"
    );

    locationSite = "4";
  }
  setTimeout(function () {
    $("#intakes div.col-md-6").each(function (index) {
      if (!$(this).hasClass("hide")) {
        $('input[name="intake"]')[index].click();
        return false;
      }
    });
  }, 100);
});

let files = null;
let data = new FormData();

if ($(window).width() < 400) {
  $("#postcode").attr("placeholder", "ZIP*");
} else {
  $("#postcode").attr("placeholder", "Postcode*");
}
