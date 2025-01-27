import pic_chart1 from "@/assets/images/pic-chart1.png";
import pic_chart2 from "@/assets/images/pic-chart2.png";
import pic_avatar from "@/assets/images/pic-avatar.png";
import pic_dot from "@/assets/images/pic-dot.svg";
import pic_white from "@/assets/images/white.png";
import ic_chevron_up from "@/assets/images/chevron-up.svg";
import ic_reward_blue from "@/assets/images/reward.svg";
import pic_thumbnail_add from "@/assets/images/form.jpg";
import pic_thumbnail_detail from "@/assets/images/thumbnail.jpg";
import pic_media_de from "@/assets/images/mediade.png";
import pic_media_ad from "@/assets/images/mediaad.png";
import icon_success from "@/assets/images/success.png";
import icon_error from "@/assets/images/error.png";

// Define a map for images
const imageMap: Record<string, string> = {
    pic_chart1: pic_chart1,
    pic_chart2: pic_chart2,
    pic_avatar: pic_avatar,
    pic_dot: pic_dot,
    pic_white: pic_white,
    ic_chevron_up: ic_chevron_up,
    ic_reward_blue: ic_reward_blue,
    pic_thumbnail_add: pic_thumbnail_add,
    pic_thumbnail_detail: pic_thumbnail_detail,
    pic_media_ad: pic_media_ad,
    pic_media_de: pic_media_de,
    icon_error: icon_error,
    icon_success: icon_success
};

// Function to get the image by name
export const localImage = (imageName: string): string => {
    const image = imageMap[imageName];
    if (!image) {
        console.error(`Image with name "${imageName}" not found.`);
    }
    return image;
}

