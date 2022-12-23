const gtag = window["gtag"];
export const logGaTracking = (gaEventSteps) => {
  const requestPromis = [];
  console.log("requestPromis", requestPromis);

  gaEventSteps.forEach((eventName) => {
    gtag("event", "Redirect_Landing_Page", {
      event_action: eventName,
    });
  });
  return Promise.all(requestPromis);
};
