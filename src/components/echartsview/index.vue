<template>
  <div>
    <!-- <div>{{eventname}}</div> -->
    <div class="chart" id="myEchartsTwo"></div>
  </div>
</template>

<script>
import { onMounted, onUnmounted, ref, watch, toRaw } from "vue";
import * as echarts from "echarts";
export default {
  name: "data_page",
  props: {
    wocastdata: String,
    eventname: String,
  },
  setup(props) {
    let a = ref([]);
    let d = ref([]);
    let e = ref([]);
    watch([() => props.wocastdata], () => {
      d = props.wocastdata;
    });

    onMounted(() => {
  
      d = toRaw(props.wocastdata);
      e = toRaw(props.eventname);
      // console.log("d", d);
      // console.log(e);

      let myChart = echarts.init(document.getElementById("myEchartsTwo"));

      var colorList = [
        "rgba(211, 68, 53, 1)",
        "rgba(228, 133, 48, 1)",
        "rgba(231, 185, 44, 1)",
        "rgba(123, 265, 213, 1)",
      ];
      var datas = d;
      let maxArr = new Array(datas.length).fill(100);
      var option = {
        title: {
          text: e+'往年今日天气概率',
         
          left: "end",
        
          top: "top",
           textStyle: {
      fontSize: 30,
      color: "rgba(5, 5, 5, 1)"
    },
        },
        legend: {
          show: false,
        },
        grid: {
          left: 0,
          right: 30,
          containLabel: true,
        },
        tooltip: {
          trigger: 'axis', //axis , item
            // padding: [120,20,100,100],
          backgroundColor: 'RGBA(0, 49, 85, 1)',
          borderColor: 'rgba(0, 151, 251, 1)',
          textStyle: {
            color: '#BCE9FC',
            // fontSize: this.$fontSize(0.16),
            align: 'top'
          },
        formatter: function (params) {
            return (
                params[0].name +
                '<br/>' +
              
                '概率' +
                ' : ' +
                params[0].value+'%'
            );
        },
        },
        xAxis: {
          show: true,
          type: "value",
          // axisLine: {
          //   show: true,
          //   lineStyle: {
          //     color: ["rgba(62, 113, 157, 0.5)"],
          //   },
          // },
          // splitLine: {
          //   lineStyle: {
          //     color: "rgba(62, 113, 157, 0.5)",
          //   },
          // },
          // axisLabel: {
          //   color: "rgba(62, 113, 157, 1)",
          // },
        },
        yAxis: [
          {
            type: "category",
            inverse: true,
            // axisLine: {
            //   show: false,
            // },
            // axisTick: {
            //   show: false,
            // },
            // axisPointer: {
            //   label: {
            //     show: true,
            //     margin: 30,
            //   },
            // },
            data: datas.map((item) => item.name),
            axisLabel: {
              margin: 100,
              fontSize: 14,
              align: "left",
              color: "#fff",
              rich: {
                a1: {
                  color: "#fff",
                  backgroundColor: colorList[0],
                  width: 20,
                  height: 20,
                  align: "center",
                  borderRadius: 10,
                },
                a2: {
                  color: "#fff",
                  backgroundColor: colorList[1],
                  width: 20,
                  height: 20,
                  align: "center",
                  borderRadius: 10,
                },
                a3: {
                  color: "#fff",
                  backgroundColor: colorList[2],
                  width: 20,
                  height: 20,
                  align: "center",
                  borderRadius: 10,
                },
                b: {
                  color: "#fff",
                  backgroundColor: colorList[3],
                  width: 20,
                  height: 20,
                  align: "center",
                  borderRadius: 10,
                },
              },
              formatter: function (params) {
                var index = datas.map((item) => item.name).indexOf(params);
                index = index + 1;
                if (index - 1 < 3) {
                  return [
                    "{a" + index + "|" + index + "}" + "  " + params,
                  ].join("\n");
                } else {
                  return ["{b|" + index + "}" + "  " + params].join("\n");
                }
              },
            },
          },
        ],
        series: [
          {
            z: 2,
            name: "value",
            type: "bar",
            barWidth: 8,
            zlevel: 1,
            data: datas.map((item, i) => {
              var itemStyle = {};
              itemStyle.color = new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                {
                  offset: 0,
                  color: "rgba(24, 103, 222, 0.4)",
                },
                {
                  offset: 1,
                  color: i < 3 ? colorList[i] : colorList[3],
                },
              ]);
              return {
                value: item.value,
                itemStyle: itemStyle,
              };
            }),
            label: {
              show: true,
              position: "right",
              color: "#fff",
              fontSize: 14,
            },
            itemStyle: {
              barBorderRadius: [0, 15, 15, 0],
            },
          },
          {
            name: "背景",
            type: "bar",
            barWidth: 24,
            barGap: "-200%",
            itemStyle: {
              normal: {
                color: "rgba(0, 64, 128, 0.19)",
              },
            },
            data: maxArr,
          },
        ],
      };

      myChart.setOption(option);

      window.onresize = function () {
        myChart.resize();
      };
      onUnmounted(() => {
        if (myChart) {
          myChart.clear();
          myChart.dispose();
          myChart = null;
        }
      });
    });
    return {
      a,
      d,
      e,
    };
  },
};
</script>

<style scoped>
.chart {
  /* position: absolute; */
  height: 350px;
  width: 700px;
  /* background-color: aqua; */
  /* top: 0px; */
  margin-top: -40px;
  /* background-color: rgb(19, 113, 163); */
}
</style>
