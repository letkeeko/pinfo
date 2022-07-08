import React from "react";
import {
  FaGlobe,
  FaStore,
  FaBehance,
  FaDiscord,
  FaDribbble,
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaLine,
  FaLinkedinIn,
  FaPinterestP,
  FaQuora,
  FaRedditAlien,
  FaSnapchatGhost,
  FaSkype,
  FaSoundcloud,
  FaSpotify,
  FaSteam,
  FaTelegramPlane,
  FaTiktok,
  FaTumblr,
  FaTwitch,
  FaTwitter,
  FaViber,
  FaVimeoV,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";
import { SiMyspace } from "react-icons/si";

export type platformProps = {
  value: string;
  label: string;
  icon?: React.ReactElement;
}[];

const platformOptions: platformProps = [
  { value: "website", label: "Website", icon: <FaGlobe /> },
  { value: "store", label: "Store", icon: <FaStore /> },
  { value: "behance", label: "Behance", icon: <FaBehance /> },
  { value: "discord", label: "Discord", icon: <FaDiscord /> },
  { value: "dribbble", label: "Dribbble", icon: <FaDribbble /> },
  { value: "facebook", label: "Facebook", icon: <FaFacebookF /> },
  { value: "github", label: "GitHub", icon: <FaGithub /> },
  { value: "instagram", label: "Instagram", icon: <FaInstagram /> },
  { value: "line", label: "Line", icon: <FaLine /> },
  { value: "linkedin", label: "LinkedIn", icon: <FaLinkedinIn /> },
  { value: "myspace", label: "Myspace", icon: <SiMyspace /> },
  { value: "pinterest", label: "Pinterest", icon: <FaPinterestP /> },
  { value: "quora", label: "Quora", icon: <FaQuora /> },
  { value: "reddit", label: "Reddit", icon: <FaRedditAlien /> },
  { value: "snapchat", label: "Snapchat", icon: <FaSnapchatGhost /> },
  { value: "skype", label: "Skype", icon: <FaSkype /> },
  { value: "soundcloud", label: "SoundCloud", icon: <FaSoundcloud /> },
  { value: "spotify", label: "Spotify", icon: <FaSpotify /> },
  { value: "steam", label: "Steam", icon: <FaSteam /> },
  { value: "telegram", label: "Telegram", icon: <FaTelegramPlane /> },
  { value: "tiktok", label: "TikTok", icon: <FaTiktok /> },
  { value: "tumblr", label: "Tumblr", icon: <FaTumblr /> },
  { value: "twitch", label: "Twitch", icon: <FaTwitch /> },
  { value: "twitter", label: "Twitter", icon: <FaTwitter /> },
  { value: "viber", label: "Viber", icon: <FaViber /> },
  { value: "vimeo", label: "Vimeo", icon: <FaVimeoV /> },
  { value: "whatsapp", label: "WhatsApp", icon: <FaWhatsapp /> },
  { value: "youtube", label: "YouTube", icon: <FaYoutube /> },
];

export default platformOptions;
