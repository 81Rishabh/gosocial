function Avatar({
    img_url,
    size
}) {
  return (
    <div className="profile-avatar" style={{width: `${size}px` , height: `${size}px`}}>
      <img src={img_url ? 'http://localhost:8000'+img_url : `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtEbTLfMii3TQW5ambR0PD6FlRMPcUFzDy_g&usqp=CAU`} alt="avatar" />
    </div>
  )
}

export default Avatar;