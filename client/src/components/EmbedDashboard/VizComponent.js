import React, { useState, useEffect } from "react";
import { sdk } from "../../helpers/CorsSessionHelper";
import { Query, Visualization, SingleValue } from "@looker/visualizations";

import {Row, Container} from 'react-bootstrap';


import { sampleQuery } from "./sampleQuery";

import styled from "styled-components";
import { PageTitle } from "../common/PageTitle";

const EmbedComponent = () => {
  const [dashboardData, setDashboardData] = useState([]);
  useEffect( () => {
sdk.ok(sdk.dashboard("789")).then((res) => {
      Promise.all(
        res.dashboard_elements.map(
          (element) =>
            new Promise((resolve, reject) => {
              sdk
                .ok(sdk.run_query({ query_id: element.query.id, result_format: "json" }))
                .then((res) => {
                  console.log("query-data", element.title, res, Object.values(res)[0]);

                  switch (element.title) {
                    case "Website Visit Volume vs Conversion Rate":
                      resolve({
                        title: element.title,
                        query: Math.round(Object.values(res)[0]["events.overall_conversion"]* 100).toFixed(0)  + "%",
                        img: "./images/icon/icon_11.svg"
                      });
                    case "Orders To Date":
                      resolve({
                        title: element.title,
                        query: Object.values(res)[0]["orders.number_of_orders"],
                        img: "./images/icon/icon_08.svg"
                      });
                    case "Orders by Day and Category":
                      resolve({
                        title: element.title,
                        query: Object.values(res)[0]["orders.number_of_orders"][
                          "products.category"
                        ]["Accessories"],
                        img: "./images/icon/icon_31.svg"
                      });
                    case "Total Sales YoY":
                      resolve({
                        title: element.title,
                        query: Object.values(res)[0]["order_items.total_sale_price"][
                          "order_items.created_year"
                        ]["2022"].toFixed(2),
                        img: "./images/icon/icon_30.svg"
                      });
                    case "Repeat Purchase Rate":
                      resolve({
                        title: element.title,
                        query: Math.round(Object.values(res)[0][
                          "repeat_purchases.percentage_repeat_purchase"
                        ]* 100).toFixed(0)  + "%",
                        img: "./images/icon/icon_29.svg"
                      });
                    case "Average Order Value":
                      resolve({
                        title: element.title,
                        query: "$" + Object.values(res)[0]["order_items.average_sale_price"].toFixed(2),
                        img: "./images/icon/icon_09.svg"
                      });
                    case "Age Profile":
                      resolve({
                        title: element.title,
                        query: Object.values(res)[0]["orders.number_of_orders"]["users.age_buckets"]["Below 35"] + " Below 35",
                        query2: Object.values(res)[0]["orders.number_of_orders"]["users.age_buckets"]["35 to 47"] + " Age 35-47",
                        query3: Object.values(res)[0]["orders.number_of_orders"]["users.age_buckets"]["48 to 64"]+ " Age 48-64",
                        img: "./images/icon/icon_39.svg"
                      });
                    case "Number of Users":
                      resolve({
                        title: element.title,
                        query: Object.values(res)[0]["users.number_of_users"],
                        img: "./images/icon/icon_10.svg"
                      });
                    case "Gender Profile":
                      resolve({
                        title: element.title,
                        query: Object.values(res)[0]["users.gender"][0],
                        img: "./images/icon/icon_37.svg"
                      });
                    default:
                      resolve({
                        title: element.title,
                        query: 0,
                      });
                  }
                })
                .catch((err) => {
                  console.log("err", err);
                  reject();
                });
            })
        )
      ).then((values) => {
        setDashboardData(values);
      });
    });
  }, []);



  return (

  <Container>
  <Row className="row gx-xxl-5 pb50 pt50">



      {dashboardData.map((data) => {
              return (
        <div class="col-lg-4 col-sm-6 mb-40 xs-mb-30 d-flex" data-aos-delay="">


          <div class="block-style-four">
          <div class="d-flex align-items-center justify-content-center flex-column">
            <img src={data.img} className="img-fluid"/>
            <h5>{data.title}</h5>
            <p>{data.query}</p>
            <p>{data.query2}</p>
            <p>{data.query3}</p>

            </div>
            </div>



      </div>
        );
      })}


      </Row>
    </Container>
  );
};

export default EmbedComponent;
