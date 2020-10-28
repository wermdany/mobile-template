<template>
  <div>
    <video id="player" autoplay></video>
  </div>
</template>
<script>
export default {
  mounted() {
    let constraints = { video: { facingMode: "environment" } };

    function onSuccess(stream) {
      let video = document.querySelector("video#player");
      console.log(stream.getVideoTracks());
      video.srcObject = stream;
    }

    function onError(error) {
      console.log("getUserMedia error: ", error);
    }

    navigator.getUserMedia(constraints, onSuccess, onError);
  }
};
</script>
<style lang="less" scoped>
video#player {
  width: 100%;
}
</style>
