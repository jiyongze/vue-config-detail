<template>
    <div>
      <Row>
        <Col span="24">
          <Button>Default</Button>
          <Button type="primary">Primary</Button>
          <Button type="dashed">Dashed</Button>
          <Button type="text">Text</Button>
          <br><br>
          <Button type="info">Info</Button>
          <Button type="success">Success</Button>
          <Button type="warning">Warning</Button>
          <Button type="error">Error</Button>
        </Col>
        <Col span="24">
        <form action="www.ba">
          <input type="text" name="" id="" value="">
          <Button custom-icon="my" type="primary" html-type="submit">Default</Button>
        </form>
        </Col>
      </Row>
    </div>
</template>

<script>
export default {
  name: 'button1'
}
</script>

<style scoped>
  .my{
    height: 10px;
    width: 10px;
    background: url('../../assets/logo.png') center center no-repeat;
    background-size: cover;
  }
</style>
