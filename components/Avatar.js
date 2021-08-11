function Avatar({ url }) {
  return (
    <image
      loading="lazy"
      className={
        "h-14 cursor-pointer rounded-full transition duration-150 transform hover:scale-110"
      }
      src={url}
      alt="Avatar pic"
    />
  );
}

export default Avatar;
