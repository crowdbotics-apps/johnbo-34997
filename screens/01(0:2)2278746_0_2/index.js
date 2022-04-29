import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
import { getNavigationScreen } from "@screens"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      style={styles.ScrollView_1}
    >
      <View style={styles.View_2} />
      <View style={styles.View_0_3}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f050/b738/c925de66220f11009514399a57e04a88"
          }}
          style={styles.ImageBackground_0_4}
        />
        <View style={styles.View_0_8}>
          <Text style={styles.Text_0_8}>Home</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/da60/dcca/000f0b22ba929eb08d29dedb6e5570bf"
          }}
          style={styles.ImageBackground_0_9}
        />
      </View>
      <View style={styles.View_0_12}>
        <View style={styles.View_0_13} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/94ff/7ce3/38f673d1170de785e7f21c9be088a3b2"
          }}
          style={styles.ImageBackground_0_14}
        />
        <View style={styles.View_0_17}>
          <Text style={styles.Text_0_17}>Search</Text>
        </View>
      </View>
      <View style={styles.View_0_18}>
        <View style={styles.View_0_19} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4077/5a6e/923fa4676a2afd2cb526927ea22d5e4a"
          }}
          style={styles.ImageBackground_0_20}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1da3/a711/5a0512c04a61287a54a26f79b819ee66"
          }}
          style={styles.ImageBackground_0_21}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5cc8/f36a/6142890d84c2233a8a572501640128b2"
          }}
          style={styles.ImageBackground_0_22}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4077/5a6e/923fa4676a2afd2cb526927ea22d5e4a"
          }}
          style={styles.ImageBackground_0_23}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fca6/02ae/b3d7adf8a354e30647977df35cd7d45b"
          }}
          style={styles.ImageBackground_0_24}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5cc8/f36a/6142890d84c2233a8a572501640128b2"
          }}
          style={styles.ImageBackground_0_25}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dc6d/43ce/1062ec98462ceda6f04405cde2151709"
          }}
          style={styles.ImageBackground_0_26}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/49ce/af0d/767d73cb41522980274dff3387f891a4"
          }}
          style={styles.ImageBackground_0_27}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/49ce/af0d/767d73cb41522980274dff3387f891a4"
          }}
          style={styles.ImageBackground_0_28}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fca6/02ae/b3d7adf8a354e30647977df35cd7d45b"
          }}
          style={styles.ImageBackground_0_29}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4077/5a6e/923fa4676a2afd2cb526927ea22d5e4a"
          }}
          style={styles.ImageBackground_0_30}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1fbe/c4f4/039cdabd1bdc294d9c3a74c8c7822b45"
          }}
          style={styles.ImageBackground_0_31}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fc07/6b4d/14bb6c695fefbf3731a9fdfc5a55aa84"
          }}
          style={styles.ImageBackground_0_32}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fc07/6b4d/14bb6c695fefbf3731a9fdfc5a55aa84"
          }}
          style={styles.ImageBackground_0_33}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dc6d/43ce/1062ec98462ceda6f04405cde2151709"
          }}
          style={styles.ImageBackground_0_34}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5cc8/f36a/6142890d84c2233a8a572501640128b2"
          }}
          style={styles.ImageBackground_0_35}
        />
        <View style={styles.View_0_36}>
          <View style={styles.View_0_37}>
            <Text style={styles.Text_0_37}>12 Jewel Drive - DR4</Text>
          </View>
          <View style={styles.View_0_38}>
            <Text style={styles.Text_0_38}>Rebecca North</Text>
          </View>
        </View>
        <View style={styles.View_0_39}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/de92/69fd/e7e12b809f814421eb30ce60b7d38017"
            }}
            style={styles.ImageBackground_0_40}
          />
          <View style={styles.View_0_41}>
            <Text style={styles.Text_0_41}>4,654</Text>
          </View>
          <View style={styles.View_0_42}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4be8/85f6/5fd05fc686b75c7a3e90aae687e70034"
              }}
              style={styles.ImageBackground_0_45}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/93a2/9d33/da4b44eb98a7e3c06034e2f6eb23b162"
              }}
              style={styles.ImageBackground_0_48}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/93a2/9d33/da4b44eb98a7e3c06034e2f6eb23b162"
              }}
              style={styles.ImageBackground_0_51}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4fa2/cbc7/c76c84f9712d6bd32c54aebda9ca65ff"
              }}
              style={styles.ImageBackground_0_54}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e1a5/75f4/eb5f03ea4b08ae0e25439155df0a56d6"
              }}
              style={styles.ImageBackground_0_57}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a313/76c4/f3ddb2dc60b14f80fdd398db90515da8"
              }}
              style={styles.ImageBackground_0_60}
            />
          </View>
        </View>
        <View style={styles.View_0_61}>
          <Text style={styles.Text_0_61}>Overall Awareness</Text>
        </View>
      </View>
      <View style={styles.View_0_62}>
        <View style={styles.View_0_63}>
          <Text style={styles.Text_0_63}>
            Deal Rooms by Number of New Activities
          </Text>
        </View>
        <View style={styles.View_0_64}>
          <View style={styles.View_0_65} />
          <View style={styles.View_0_66}>
            <View style={styles.View_0_67}>
              <Text style={styles.Text_0_67}>Deal Room</Text>
            </View>
            <View style={styles.View_0_68}>
              <Text style={styles.Text_0_68}>Visited</Text>
            </View>
            <View style={styles.View_0_69}>
              <Text style={styles.Text_0_69}>Attached Doc</Text>
            </View>
          </View>
          <View style={styles.View_0_70}>
            <View style={styles.View_0_71}>
              <Text style={styles.Text_0_71}>10</Text>
            </View>
            <View style={styles.View_0_72}>
              <Text style={styles.Text_0_72}>14</Text>
            </View>
            <View style={styles.View_0_73}>
              <Text style={styles.Text_0_73}>35 Th Alabama NY 321</Text>
            </View>
          </View>
          <View style={styles.View_0_74}>
            <View style={styles.View_0_75} />
            <View style={styles.View_0_76}>
              <Text style={styles.Text_0_76}>6</Text>
            </View>
            <View style={styles.View_0_77}>
              <Text style={styles.Text_0_77}>10</Text>
            </View>
            <View style={styles.View_0_78}>
              <Text style={styles.Text_0_78}>6543 Franklin Street-DR3</Text>
            </View>
          </View>
          <View style={styles.View_0_79}>
            <View style={styles.View_0_80}>
              <Text style={styles.Text_0_80}>4</Text>
            </View>
            <View style={styles.View_0_81}>
              <Text style={styles.Text_0_81}>8</Text>
            </View>
            <View style={styles.View_0_82}>
              <Text style={styles.Text_0_82}>Skatt Building - DR1</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_0_83}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7561/fa4e/8de7ebcce8eb64ce96cf619c96a6588e"
          }}
          style={styles.ImageBackground_0_84}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d3d2/6ba3/b19ccb09d8482846be3f8d4cacac0988"
          }}
          style={styles.ImageBackground_0_85}
        />
        <View style={styles.View_0_86}>
          <View style={styles.View_0_87} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8b77/6f9b/3a45e03d8dccceee898a764400875fb1"
            }}
            style={styles.ImageBackground_0_88}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8b77/6f9b/3a45e03d8dccceee898a764400875fb1"
            }}
            style={styles.ImageBackground_0_89}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/82fd/7f35/d967ba0e628be4a874be6a596c2a6e23"
            }}
            style={styles.ImageBackground_0_90}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e4b1/6c3e/e63f8f0ec434319944ce033f141aea7d"
          }}
          style={styles.ImageBackground_0_91}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7b63/3f9d/51e99bdbe48c3bb369ffceb7704ed9a0"
          }}
          style={styles.ImageBackground_0_94}
        />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(250, 250, 250, 1)" },
  View_2: { height: hp("122%") },
  View_0_3: {
    width: wp("93%"),
    minWidth: wp("93%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("7%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_0_4: {
    width: wp("5%"),
    height: hp("2%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_0_8: {
    width: wp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_0_8: {
    color: "rgba(25, 25, 27, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 1,
    textTransform: "none"
  },
  ImageBackground_0_9: {
    width: wp("12%"),
    height: hp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("81%")
  },
  View_0_12: {
    width: wp("93%"),
    minWidth: wp("93%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("17%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_0_13: {
    width: wp("93%"),
    height: hp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(234, 235, 236, 1)",
    borderWidth: 1
  },
  ImageBackground_0_14: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_0_17: {
    width: wp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_0_17: {
    color: "rgba(194, 194, 194, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1,
    textTransform: "none"
  },
  View_0_18: {
    width: wp("93%"),
    minWidth: wp("93%"),
    height: hp("47%"),
    minHeight: hp("47%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("28%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_0_19: {
    width: wp("93%"),
    height: hp("47%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(234, 235, 236, 1)",
    borderWidth: 1
  },
  ImageBackground_0_20: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66%")
  },
  ImageBackground_0_21: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("79%")
  },
  ImageBackground_0_22: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73%")
  },
  ImageBackground_0_23: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  ImageBackground_0_24: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%")
  },
  ImageBackground_0_25: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("31%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  ImageBackground_0_26: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("36%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%")
  },
  ImageBackground_0_27: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("40%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  ImageBackground_0_28: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("27%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74%")
  },
  ImageBackground_0_29: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("86%")
  },
  ImageBackground_0_30: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("31%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84%")
  },
  ImageBackground_0_31: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("27%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%")
  },
  ImageBackground_0_32: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_0_33: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("36%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("70%")
  },
  ImageBackground_0_34: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("40%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("80%")
  },
  ImageBackground_0_35: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%")
  },
  View_0_36: {
    width: wp("39%"),
    height: hp("5%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_0_37: {
    width: wp("39%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_0_37: {
    color: "rgba(25, 25, 27, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 1,
    textTransform: "none"
  },
  View_0_38: {
    width: wp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_0_38: {
    color: "rgba(143, 142, 151, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 1,
    textTransform: "none"
  },
  View_0_39: {
    width: wp("41%"),
    height: hp("23%"),
    top: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_0_40: {
    width: wp("41%"),
    height: hp("23%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_0_41: {
    width: wp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("12%"),
    justifyContent: "flex-start"
  },
  Text_0_41: {
    color: "rgba(127, 106, 255, 1)",
    fontSize: 26,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 1,
    textTransform: "none"
  },
  View_0_42: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("6%")
  },
  ImageBackground_0_45: {
    width: wp("7%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_0_48: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_0_51: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  ImageBackground_0_54: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  ImageBackground_0_57: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_0_60: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_0_61: {
    width: wp("30%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32%"),
    top: hp("41%"),
    justifyContent: "flex-start"
  },
  Text_0_61: {
    color: "rgba(143, 142, 151, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 1,
    textTransform: "none"
  },
  View_0_62: {
    width: wp("93%"),
    minWidth: wp("93%"),
    height: hp("27%"),
    minHeight: hp("27%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("79%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_0_63: {
    width: wp("79%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_0_63: {
    color: "rgba(25, 25, 27, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1,
    textTransform: "none"
  },
  View_0_64: {
    width: wp("93%"),
    minWidth: wp("93%"),
    height: hp("22%"),
    minHeight: hp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5%")
  },
  View_0_65: {
    width: wp("93%"),
    height: hp("22%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(234, 235, 236, 1)",
    borderWidth: 1
  },
  View_0_66: {
    width: wp("87%"),
    height: hp("2%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_0_67: {
    width: wp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_0_67: {
    color: "rgba(143, 142, 151, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1,
    textTransform: "uppercase"
  },
  View_0_68: {
    width: wp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_0_68: {
    color: "rgba(143, 142, 151, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1,
    textTransform: "uppercase"
  },
  View_0_69: {
    width: wp("25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("61%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_0_69: {
    color: "rgba(143, 142, 151, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1,
    textTransform: "uppercase"
  },
  View_0_70: {
    width: wp("65%"),
    height: hp("2%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_0_71: {
    width: wp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("61%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_0_71: {
    color: "rgba(25, 25, 27, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1,
    textTransform: "none"
  },
  View_0_72: {
    width: wp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_0_72: {
    color: "rgba(25, 25, 27, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1,
    textTransform: "none"
  },
  View_0_73: {
    width: wp("36%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_0_73: {
    color: "rgba(143, 142, 151, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1,
    textTransform: "none"
  },
  View_0_74: {
    width: wp("93%"),
    height: hp("5%"),
    top: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_0_75: {
    width: wp("93%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(247, 246, 255, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_0_76: {
    width: wp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("65%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_0_76: {
    color: "rgba(127, 106, 255, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 1,
    textTransform: "none"
  },
  View_0_77: {
    width: wp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("49%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_0_77: {
    color: "rgba(127, 106, 255, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 1,
    textTransform: "none"
  },
  View_0_78: {
    width: wp("41%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_0_78: {
    color: "rgba(127, 106, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1,
    textTransform: "none"
  },
  View_0_79: {
    width: wp("64%"),
    height: hp("2%"),
    top: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_0_80: {
    width: wp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("61%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_0_80: {
    color: "rgba(25, 25, 27, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 1,
    textTransform: "none"
  },
  View_0_81: {
    width: wp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_0_81: {
    color: "rgba(25, 25, 27, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 1,
    textTransform: "none"
  },
  View_0_82: {
    width: wp("32%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_0_82: {
    color: "rgba(143, 142, 151, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1,
    textTransform: "none"
  },
  View_0_83: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("113%")
  },
  ImageBackground_0_84: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_0_85: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("3%")
  },
  View_0_86: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36%"),
    top: hp("3%")
  },
  View_0_87: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    borderColor: "rgba(194, 194, 194, 1)",
    borderWidth: 2
  },
  ImageBackground_0_88: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("0%")
  },
  ImageBackground_0_89: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%")
  },
  ImageBackground_0_90: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%")
  },
  ImageBackground_0_91: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("60%"),
    top: hp("3%")
  },
  ImageBackground_0_94: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("86%"),
    top: hp("3%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
