function Avatar({ url }) {
  return (
    <img
      loading="lazy"
      className=" h-14 cursor-pointer rounded-full transition duration-150 transform hover:scale-110"
      src={url}
      alt="Avatar"
    />
  );
}

export default Avatar;
