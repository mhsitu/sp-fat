# Test

``` bash
# 在当前目录下启动容器
$ docker-compose up

# 查看wqmid容器的ID
$ docker ps -a

# 将试用许可拷贝到容器目录
$ docker cp filename containerID:/opt/SuperMap/License/

# 重启容器
$ docker restart containerID
```